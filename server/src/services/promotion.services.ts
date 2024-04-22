import { Request, Response } from 'express'
import AppDataSource from '../config/db.config.js'
import { Order } from '../entities/order.entity.js'
import { Promotion } from '../entities/promotion.entity.js'
import { User } from '../entities/user.entity.js'

const promotionRepository = AppDataSource.getRepository(Promotion)
const userRepository = AppDataSource.getRepository(User)
const orderRepository = AppDataSource.getRepository(Order)

export const PromotionService = {
   async getPromotions(req: Request, res: Response) {
      try {
         const promotions = await promotionRepository.find()
         res.json(promotions)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при получении акций' })
      }
   },

   async addItem(req: Request, res: Response) {
      try {
         const newPromotion = new Promotion()
         newPromotion.name = req.body.name
         newPromotion.desc = req.body.desc
         newPromotion.banner = req.body.banner
         newPromotion.promocode = req.body.promocode

         const savedPromotions = await promotionRepository.save(newPromotion)
         res.json(savedPromotions)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка добавлении акции' })
      }
   },

   async editItem(req: Request, res: Response) {
      const promotionId = req.params.id

      const existingPromotion = await promotionRepository.findOne({ where: { id: +promotionId } })

      if (!existingPromotion) return res.status(404).json({ message: 'Акция не найдена' })

      try {
         existingPromotion.name = req.body.name
         existingPromotion.desc = req.body.desc
         existingPromotion.banner = req.body.banner
         existingPromotion.promocode = req.body.promocode

         const updatedPromotion = await promotionRepository.save(existingPromotion)
         res.json(updatedPromotion)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при редактировании акции' })
      }
   },

   async check(req: Request, res: Response) {
      const productsList = req.body.products
      const price = req.body.price
      const promocode = req.body.promocode
      const userId = req.body.idUser

      if (promocode == 'НОВЫЙ') {
         const userOrders = await orderRepository.find({
            where: {
               user: {
                  id: +userId
               }
            }
         })

         if (userOrders.length === 0) {
            const response = {
               promocode: promocode,
               discount: 15
            }
            res.json(response)
         } else {
            res.status(400).json({ message: 'Вы уже делали заказ с данного номера!' })
         }
      }

      if (promocode == 'ПИЦЦА') {
         if (+price >= 1500) {
            const response = {
               promocode: promocode,
               discount: 10
            }
            res.json(response)
         } else res.status(400).json({ message: 'Ваш заказ меньше 1500 рублей!' })
      }

      if (promocode == 'СУПЕР') {
         if (+price >= 2500) {
            const response = {
               promocode: promocode,
               discount: 20
            }
            res.json(response)
         } else res.status(400).json({ message: 'Ваш заказ меньше 2500 рублей!' })
      }
   }
}
