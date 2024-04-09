export default interface IOrder {
  id: number
  user_id: number
  order_desc_id: number
  createdAt: Date
  updatedAt: Date
  payment: string
  receipt: number
  status: string
}
