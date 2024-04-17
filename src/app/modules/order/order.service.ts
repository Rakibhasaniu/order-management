import { Response } from "express";
import { User } from "../user/user.model";
import { TOrder } from "./order.interface";


const addNewOrderIntoDB = async(res:Response,userId:number,payload:TOrder) => {
    const user = await User.findOne({userId});
    if(!user){
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    if(user.orders && user.orders.length > 0){
        user.orders.push({payload});
    } else {
        user.orders = [{payload}];
    }

    const result = await user.save();
    return result;
}

export const OrderServices = {
    addNewOrderIntoDB
}