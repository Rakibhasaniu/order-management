import { Router } from "express";
import { OrderController } from "./order.controller";



const router = Router();

router.put('/:userId/orders',OrderController.addNewOrder)

export const OrderRoutes = router;