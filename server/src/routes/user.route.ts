import express from 'express'
import { UserService } from '../services/user.services.js'

const router = express.Router()

router.get('/', UserService.getUsers)
router.get('/get/:phone', UserService.getUserByPhone)

export default router
