import { Response } from "express";
import { User } from "../user/user.model";
import { TOrder, TOrders } from "./order.interface";
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

const getAllProduct = async(userId:number) => {
    const user = await User.findOne({userId});
    if(!user){
        return { success: false, message: 'User not found' };
    }
    const orders = await Order.findOne({userId:userId},
        {
            _id: 0, userId: 0, __v: 0, 'orders._id': 0, 'orders.orderTotal': 0 
        }
    );
    // console.log(orders)
  return orders;
}
export const OrderServices = {
    addNewOrderIntoDB,
    getAllProduct,

}