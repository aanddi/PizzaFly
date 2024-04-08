import { Request, Response } from 'express'
import AppDataSource from '../config/db.config.js'
import { Categorie } from '../entities/categorie.entity.js'

const categorieRepository = AppDataSource.getRepository(Categorie)

export const CategoriesService = {
   async getAll(req: Request, res: Response) {
      try {
         const categorie = await categorieRepository.find()
         res.json(categorie)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при получении продуктов' })
      }
   }
}