import { In } from 'typeorm';
import AppDataSource from '../config/db.config.js';
import { Product } from '../entities/product.entity.js';
const productRepository = AppDataSource.getRepository(Product);
export const ProductService = {
    async getProducts(req, res) {
        const categorie = req.query.categorie;
        try {
            const products = await productRepository.find({
                where: {
                    categorie: In([categorie])
                }
            });
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при получении продуктов' });
        }
    },
    async addItem(req, res) {
        try {
            const newProduct = new Product();
            newProduct.name = req.body.name;
            newProduct.price = req.body.price;
            newProduct.image = req.body.image;
            newProduct.desc = req.body.desc;
            newProduct.discount = req.body.discount;
            newProduct.tags = req.body.tags;
            newProduct.categorie = req.body.categorie_id;
            newProduct.size = req.body.size;
            const savedProduct = await productRepository.save(newProduct);
            res.json(savedProduct);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при добавлении категории' });
        }
    },
    async editItem(req, res) {
        const productId = req.params.id; // Принимаем идентификатор продукта из URL параметра
        const existingProduct = await productRepository.findOne({ where: { id: +productId } });
        if (!existingProduct) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }
        try {
            existingProduct.name = req.body.name;
            existingProduct.price = req.body.price;
            existingProduct.image = req.body.image;
            existingProduct.desc = req.body.desc;
            existingProduct.discount = req.body.discount;
            existingProduct.tags = req.body.tags;
            existingProduct.categorie = req.body.categorie_id;
            existingProduct.size = req.body.size;
            const updatedProduct = await productRepository.save(existingProduct);
            res.json(updatedProduct);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при редактировании продукта' });
        }
    }
};
