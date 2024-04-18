import { Router } from "express";
import { OrderController } from "./order.controller";



const router = Router();

router.put('/:userId/orders',OrderController.addNewOrder)
router.get('/:userId/orders',OrderController.getAllOrder)
router.get('/:userId/orders/total-price',OrderController.countTotal)

export const OrderRoutes = router;