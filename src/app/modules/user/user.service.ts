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

export const UserService ={
    createNewUserIntoDB,
    getAllUser,
    getSingleUserFromDB

}