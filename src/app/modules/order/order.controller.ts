import { NextFunction, Request, Response, response } from "express";
import { OrderServices } from "./order.service";


const addNewOrder = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const userId = parseInt(req.params.userId);
        const result = await OrderServices.addNewOrderIntoDB(res,userId,req.body)
        res.json({
            success:true,
            message:'Order Created Successfully',
            data:result
        })
    } catch (err) {
        next();
    }
    
}
const getAllOrder = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const userId = parseInt(req.params.userId);
        const result = await OrderServices.getAllProduct(userId)
        res.json({
            success:true,
            message:'Order Fetched Successfully',
            data:result
        })
    } catch (err) {
        next();
    }
    
}
const countTotal = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const userId = parseInt(req.params.userId);
        let result = await OrderServices.countTotalPrice(userId)
        const totalPrice = result;
        res.json({
            success:true,
            message:'Order Price Count Successfully',
            data:{totalPrice}
        })
    } catch (err) {
        next();
    }
    
}

export const OrderController = {
    addNewOrder,
    getAllOrder,
    countTotal
}