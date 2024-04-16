import { TUser } from "./user.interface";
import { User } from "./user.model";

const createNewUserIntoDB = async(payload:TUser) => {
     await User.create(payload);
     const user = await User.findOne(
        {userId:payload.userId},
        {
            _id: 0, password: 0, __v: 0, 'fullName._id': 0, 'address._id': 0 
        }
     )
    return user;
}
const getAllUser = async() => {
    const result = await User.find(
        {},
        {
            _id: 0, password: 0, __v: 0, 'fullName._id': 0, 'address._id': 0 
        }

    );
    // console.log(result)
    return result;
}
const getSingleUserFromDB= async(id:any) => {
    const result = await User.findOne(
        {userId:id},
        {_id: 0, password: 0, __v: 0, 'fullName._id': 0, 'address._id': 0}
    )
    return result;
}

const updateUserFromDB = async(userId:any,payload:any) => {
    // const user = await User.findOne({id});
    // if(!user){
    //     throw new Error('User not found');
    // }
    // console.log(id,payload)
    const updatedUser = await User.findOneAndUpdate(
        { userId },
        payload,
        {
        //   upsert: true,
        //   setDefaultsOnInsert: true,
          new: true, // Return the updated document
          projection: { _id: 0, password: 0, __v: 0, "fullName._id": 0, "address._id": 0 }, // Exclude fields from the result
        }
      );
      console.log(updatedUser)
    return updatedUser;

}

const deleteUserFroDB = async(userId:any) => {
    const deleteUser = await User.findOneAndDelete({userId});
    return deleteUser;
}

export const UserService ={
    createNewUserIntoDB,
    getAllUser,
    getSingleUserFromDB,
    updateUserFromDB,
    deleteUserFroDB

}