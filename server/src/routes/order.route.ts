import express from 'express'
import { OrderService } from '../services/order.services.js'

const router = express.Router()

router.get('/all', OrderService.getAll)

router.get('/all-desc', OrderService.getAllDesc)

router.post('/new', OrderService.newOrder)

export default router
