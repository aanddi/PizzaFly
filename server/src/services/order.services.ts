import { Request, Response } from 'express'
import { Product } from 'src/entities/product.entity.js'
import AppDataSource from '../config/db.config.js'
import { OrderDesc } from '../entities/order-desc.entity.js'
import { Order } from '../entities/order.entity.js'

const orderRepository = AppDataSource.getRepository(Order)
const orderDescRepository = AppDataSource.getRepository(OrderDesc)

interface OrderDescItem extends Product {
   count: number
}

export const OrderService = {
   async getAll(req: Request, res: Response) {
      const orders = await orderRepository.find()

      res.json(orders)
   },

   async getAllDesc(req: Request, res: Response) {
      const ordersDesc = await orderDescRepository.find({ relations: ['order', 'product'], loadRelationIds: true })

      res.json(ordersDesc)
   },

   async deleteDescOrder(req: Request, res: Response) {
      try {
         const idDescOrder = req.params.id

         // Попытка найти запись описания заказа по переданному идентификатору
         const orderDescToRemove = await orderDescRepository.findOne({
            where: {
               id: +idDescOrder
            }
         })

         if (!orderDescToRemove) return res.status(404).json({ message: 'Запись описания заказа не найдена' })

         // Удаление записи описания заказа
         await orderDescRepository.remove(orderDescToRemove)

         return res.json({ message: 'Запись описания заказа успешно удалена' })
      } catch (error) {
         console.error('Ошибка при удалении записи описания заказа:', error)
         return res.status(500).json({ message: 'Произошла ошибка при удалении записи описания заказа' })
      }
   },

   async deleteOrder(req: Request, res: Response) {
      try {
         const idOrder = req.params.id

         // Попытка найти запись описания заказа по переданному идентификатору
         const orderToRemove = await orderRepository.findOne({
            where: {
               id: +idOrder
            }
         })

         if (!orderToRemove) return res.status(404).json({ message: 'Запись описания заказа не найдена' })

         // Удаление записи описания заказа
         await orderRepository.remove(orderToRemove)

         return res.json({ message: 'Запись заказа успешно удалена' })
      } catch (error) {
         console.error('Ошибка при удалении записи заказа:', error)
         return res.status(500).json({ message: 'Произошла ошибка при удалении заказа' })
      }
   },

   async getOrderByIdUser(req: Request, res: Response) {
      const idUser = req.params.id

      const orders = await orderRepository.find({
         where: {
            user: {
               id: +idUser
            }
         }
      })

      res.json(orders)
   },

   async getOrderDescById(req: Request, res: Response) {
      const idOrder = req.params.id

      const desc = await orderDescRepository.find({
         where: {
            order: {
               id: +idOrder
            }
         },
         relations: ['product']
      })

      res.json(desc)
   },

   async newOrder(req: Request, res: Response) {
      //==== Создание заказа
      const productsOrder: OrderDescItem[] = req.body.products

      // расчет полной цена за все позиции с учетом
      // const totalPricetotalPrice = productsOrder.reduce(
      //    (acc, product) => acc + (product.price - (product.price * product.discount) / 100) * product.count,
      //    0
      // )

      const newOrder = new Order()
      newOrder.user = req.body.userId
      newOrder.price = req.body.price
      newOrder.payment = req.body.payment
      newOrder.comment = req.body.comment
      newOrder.promocode = req.body.promocode
      newOrder.discont = req.body.discont
      newOrder.status = 'Выполнен'
      newOrder.address = req.body.address

      const savedOrder = await orderRepository.save(newOrder)

      //==== Создание описания заказа
      const orderId = savedOrder.id

      for (const product of productsOrder) {
         const newOrderDesc = new OrderDesc()

         // расчет полной стоимости позиции с учетом количества и скидки на позицию
         const totalPrice = product.price * (1 - product.discount / 100) * product.count

         newOrderDesc.order = orderId as any // ?? ошибка типизации, хз как дефать
         newOrderDesc.product = product.id as any // ?? ошибка типизации, хз как дефать
         newOrderDesc.count = product.count
         newOrderDesc.cost = totalPrice
         newOrderDesc.price = product.price
         newOrderDesc.discount = product.discount
         await orderDescRepository.save(newOrderDesc)
      }

      res.json(savedOrder)
   }
}
