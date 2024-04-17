import { Model } from 'mongoose'

export type TOrder = {
  productName: string
  price: number
  quantity: number
  orderTotal: number
}

export type TOrders = {
  userId: number
  orders: TOrder[]
}

export interface OrdersModel extends Model<TOrders> {
  isUserExsistById(id: number): Promise<boolean>
}
