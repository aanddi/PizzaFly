import express from 'express'
import { ProductService } from '../services/product.services.js'

const router = express.Router()

router.get('/', ProductService.getProducts)

router.post('/add', ProductService.addItem)

router.put('/edit/:id', ProductService.editItem)

router.get('/stoplist', ProductService.getStopList)

router.post('/stoplist/add', ProductService.addStopListItem)

export default router
