import { Response } from "express";
import { User } from "../user/user.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.schema";


const addNewOrderIntoDB = async(res:Response,userId:number,payload:TOrder) => {
    const { productName, price, quantity } = payload;

    const user = await User.findOne({userId});
    if(!user){
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    const orderUpdate = {
        productName,
        price,
        quantity,
        orderTotal: price * quantity  
      };
      let updateOrder = await Order.findOneAndUpdate(
        {userId:userId},
        {$push:{orders:orderUpdate}},
        {new:true,upsert:true}
      )
      return updateOrder;
}


export const OrderServices = {
    addNewOrderIntoDB
}