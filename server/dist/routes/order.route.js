import express from 'express';
import { OrderService } from '../services/order.services.js';
const router = express.Router();
router.post('/new', OrderService.newOrder);
export default router;
