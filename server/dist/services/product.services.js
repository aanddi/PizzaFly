import { In } from 'typeorm'
import AppDataSource from '../config/db.config.js'
import { City } from '../entities/city.entity.js'
import { Product } from '../entities/product.entity.js'
import { StopList } from '../entities/stop-list.entity.js'
const productRepository = AppDataSource.getRepository(Product)
const stopListRepository = AppDataSource.getRepository(StopList)
const cityRepository = AppDataSource.getRepository(City)
export const ProductService = {
   async getProducts(req, res) {
      const categorie = req.query.categorie
      try {
         const products = await productRepository.find({
            where: {
               categorie: In([categorie])
            }
         })
         res.json(products)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при получении продуктов' })
      }
   },
   async getStopList(req, res) {
      const cityName = req.query.city
      const idCity = await cityRepository.findOne({
         where: {
            name: cityName
         }
      })
      const stopList = await stopListRepository.find({
         where: {
            city: {
               id: idCity?.id
            }
         },
         relations: ['product']
      })
      res.json(stopList)
   },
   async addStopListItem(req, res) {
      const newStopItem = new StopList()
      newStopItem.city = req.body.city_id
      newStopItem.product = req.body.product_id
      const savedStopItem = await stopListRepository.save(newStopItem)
      res.json(savedStopItem)
   },
   async addItem(req, res) {
      try {
         const newProduct = new Product()
         newProduct.name = req.body.name
         newProduct.price = req.body.price
         newProduct.image = req.body.image
         newProduct.desc = req.body.desc
         newProduct.discount = req.body.discount
         newProduct.tags = req.body.tags
         newProduct.categorie = req.body.categorie_id
         newProduct.size = req.body.size
         const savedProduct = await productRepository.save(newProduct)
         res.json(savedProduct)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при добавлении категории' })
      }
   },
   async editItem(req, res) {
      const productId = req.params.id
      const existingProduct = await productRepository.findOne({ where: { id: +productId } })
      if (!existingProduct) return res.status(404).json({ message: 'Продукт не найден' })
      try {
         existingProduct.name = req.body.name
         existingProduct.price = req.body.price
         existingProduct.image = req.body.image
         existingProduct.desc = req.body.desc
         existingProduct.discount = req.body.discount
         existingProduct.tags = req.body.tags
         existingProduct.categorie = req.body.categorie_id
         existingProduct.size = req.body.size
         const updatedProduct = await productRepository.save(existingProduct)
         res.json(updatedProduct)
      } catch (error) {
         res.status(500).json({ message: 'Ошибка при редактировании продукта' })
      }
   }
}
