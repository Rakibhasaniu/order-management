import { NextFunction, Request, Response } from "express";
import { OrderServices } from "./order.service";


const addNewOrder = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const userId = parseInt(req.params.userId);
        const result = await OrderServices.addNewOrderIntoDB(userId,req.body)
        res.json({
            success:true,
            message:'Order Created Successfully',
            data:result
        })
    } catch (err) {
        next();
    }
    
}

export const OrderController = {
    addNewOrder
}