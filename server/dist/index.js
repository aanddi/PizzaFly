import 'reflect-metadata';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import AppDataSource from './config/db.config.js';
import CategoriestRoutes from './routes/categorie.route.js';
import ProductRoutes from './routes/product.route.js';
const PORT = process.env.PORT || 5000;
const app = express();
//========== CONFIG ==========//
dotenv.config();
app.use(cors());
app.use(express.json());
//========== ROUTES ==========//
const route = express.Router();
// установка глобального префикса всем маршрутам
app.use('/api', route);
route.get('/', async (req, res) => {
    res.json(['hello pizza']);
});
route.use('/products', ProductRoutes);
route.use('/categories', CategoriestRoutes);
//========== DATABASE AND SERVER ==========//
AppDataSource.initialize()
    .then(() => {
    console.log('✓ Database: connected sucessfully');
})
    .catch(err => {
    console.log(`✕ Database: error connecting database - ${err}`);
});
app.listen(PORT, () => {
    console.log(`✓ Server: listening on port ${PORT}`);
});
