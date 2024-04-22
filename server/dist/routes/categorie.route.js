import express from 'express'
import { CategoriesService } from '../services/caregorie.services.js'
const router = express.Router()
router.get('/', CategoriesService.getAll)
router.post('/add', CategoriesService.add)
router.post('/edit/:id', CategoriesService.editItem)
export default router
