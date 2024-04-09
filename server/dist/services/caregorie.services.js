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
            res.status(500).json({ message: 'Ошибка при получении продуктов' });
        }
    }
};
