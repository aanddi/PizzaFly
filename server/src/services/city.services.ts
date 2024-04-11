import { Request, Response } from 'express'
import AppDataSource from '../config/db.config.js'
import { City } from '../entities/city.entity.js'

const cityRepository = AppDataSource.getRepository(City)

export const CityService = {
   async getCitys(req: Request, res: Response) {
      try {
         const citys = await cityRepository.find()
         res.json(citys)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при получении городов' })
      }
   },

   async addItem(req: Request, res: Response) {
      try {
         const newCity = new City()
         newCity.name = req.body.name

         const savedCity = await cityRepository.save(newCity)
         res.json(savedCity)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка добавлении города' })
      }
   },

   async editItem(req: Request, res: Response) {
      const cityId = req.params.id

      const existingCity = await cityRepository.findOne({ where: { id: +cityId } });

      if (!existingCity) return res.status(404).json({ message: 'Город не найден' })

      try {
         existingCity.name = req.body.name

         const updatedCity = await cityRepository.save(existingCity)
         res.json(updatedCity)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при редактировании города' })
      }
   }
}
