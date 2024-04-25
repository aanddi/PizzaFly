export default interface IOrder {
  id: number
  createdAt: Date
  updatedAt: Date
  price: number
  status: string
  comment?: string
  promocode?: string
  discont: number
  address: string
  payment: string
}
