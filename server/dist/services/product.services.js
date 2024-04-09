import AppDataSource from '../config/db.config.js';
import { Product } from '../entities/product.entity.js';
const productRepository = AppDataSource.getRepository(Product);
export const ProductService = {
    async getAll(req, res) {
        try {
            const products = await productRepository.find();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при получении продуктов' });
        }
    }
};
