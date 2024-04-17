import { Schema, model } from 'mongoose'
import { OrdersModel, TOrder, TOrders } from './order.interface'

const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: [true, 'productName is required'] },
  price: { type: Number, required: [true, 'price is required'], min: 0 },
  quantity: { type: Number, required: [true, 'quantity is required'] },
  orderTotal: { type: Number, default: 0 },
})

const ordersSchema = new Schema<TOrders, OrdersModel>({
  userId: { type: Number, unique: true, required: true },
  orders: { type: [orderSchema], required: [true, 'orders details required'] },
})

ordersSchema.statics.isUserExsistById = async (userId: number) => {
  if (await Order.exists({ userId })) {
    return true
  } else {
    return false
  }
}

export const Order = model<TOrders, OrdersModel>('order', ordersSchema)

