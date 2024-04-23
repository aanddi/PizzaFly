import express from 'express'
import { PromotionService } from '../services/promotion.services.js'

const router = express.Router()

router.get('/', PromotionService.getPromotions)

router.post('/add', PromotionService.addItem)

router.put('/edit/:id', PromotionService.editItem)

router.post('/check', PromotionService.check)

export default router
