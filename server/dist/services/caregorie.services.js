import AppDataSource from '../config/db.config.js';
import { Categorie } from '../entities/categorie.entity.js';
const categorieRepository = AppDataSource.getRepository(Categorie);
export const CategoriesService = {
    async getAll(req, res) {
        try {
            const categorie = await categorieRepository.find();
            res.json(categorie);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при получении категорий' });
        }
    },
    async add(req, res) {
        try {
            const newCategorie = new Categorie();
            newCategorie.name = req.body.name;
            const savedCategorie = await categorieRepository.save(newCategorie);
            res.json(savedCategorie);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при добавлении категории' });
        }
    },
    async editItem(req, res) {
        const productId = req.params.id;
        const existingProduct = await categorieRepository.findOne({ where: { id: +productId } });
        if (!existingProduct)
            return res.status(404).json({ message: 'Категория не найдена' });
        try {
            existingProduct.name = req.body.name;
            const updatedProduct = await categorieRepository.save(existingProduct);
            res.json(updatedProduct);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при редактировании категории' });
        }
    }
};
