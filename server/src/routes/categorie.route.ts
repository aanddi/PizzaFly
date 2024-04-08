import express from 'express'
import { CategoriesService } from '../services/caregorie.services.js'

const router = express.Router()

router.get('/', CategoriesService.getAll)

export default router
