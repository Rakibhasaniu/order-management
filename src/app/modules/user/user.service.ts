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
    const result = await User.find();
    // console.log(result)
    return result;
}

export const UserService ={
    createNewUserIntoDB,
    getAllUser

}