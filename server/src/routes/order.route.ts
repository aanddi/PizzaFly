import express from 'express'
import { OrderService } from '../services/order.services.js'

const router = express.Router()

router.get('/all', OrderService.getAll)

router.get('/all-desc', OrderService.getAllDesc)

router.post('/new', OrderService.newOrder)

router.delete('/delete-desc/:id', OrderService.deleteDescOrder)

router.delete('/delete-order/:id', OrderService.deleteOrder)

router.get('/:id', OrderService.getOrderByIdUser)

router.get('/desc/:id', OrderService.getOrderDescById)

export default router
