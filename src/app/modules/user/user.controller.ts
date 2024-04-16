import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const userData = req.body;
        const user = await UserService.createNewUserIntoDB(userData);

        res.json({
            success:true,
            message:'User Created Successfully',
            data:user
        })

    } catch(err){
        next(err);
    }
}

const getAllUser = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const user = await UserService.getAllUser();
        // console.log(user)

        res.json({
            success:true,
            message:'User Retrieve Successfully',
            data:user
        })

    } catch(err){
        next(err);
    }
}

const getSingleUser = async(req:Request,res:Response,next:NextFunction) => {
    try{

        const userId = req.params.userId;
        // console.log(userId)
        const user = await UserService.getSingleUserFromDB(userId);
        // console.log(user)

        res.json({
            success:true,
            message:'User Retrieve Successfully',
            data:user
        })

    } catch(err){
        next(err);
    }
}

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser
    
}