import express from 'express';
import { CityService } from '../services/city.services.js';
const router = express.Router();
router.get('/', CityService.getCitys);
router.post('/add', CityService.addItem);
router.put('/edit/:id', CityService.editItem);
export default router;
