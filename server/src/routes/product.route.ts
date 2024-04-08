import express from 'express'
import { ProductService } from '../services/product.services.js'

const router = express.Router()

router.get('/', ProductService.getAll)

export default router
