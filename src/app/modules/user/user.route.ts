import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();


router.post('/create-user',UserController.createUser)
router.get('/',UserController.getAllUser)
router.get('/:userId',UserController.getSingleUser)
router.put('/:userId',UserController.updateUser)
router.delete('/:userId',UserController.deleteUser)

export const UserRoutes = router;