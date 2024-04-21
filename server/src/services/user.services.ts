import { Request, Response } from 'express'
import AppDataSource from '../config/db.config.js'
import { User } from '../entities/user.entity.js'
const userRepository = AppDataSource.getRepository(User)

export const UserService = {
   async getUserByPhone(req: Request, res: Response) {
      const phone = req.body.phone
      try {
         const user = await userRepository.find({ where: { phone: phone } })

         if (user.length > 0) res.json(user)
         else {
            const newUser = new User()
            newUser.phone = phone

            const savedUser = await userRepository.save(newUser)
            res.json(savedUser)
         }
      } catch (error) {
         res.status(500).json({ message: 'Ошибка' })
      }
   },
   
   async getUsers(req: Request, res: Response) {
      try {
         const users = await userRepository.find()
         res.json(users)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка' })
      }
   }
}
