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
    },
    async add(req, res) {
        try {
            const newCategorie = new Categorie();
            newCategorie.name = req.body.name; // Предполагается, что вы ожидаете имя категории в теле запроса
            const savedCategorie = await categorieRepository.save(newCategorie);
            res.json(savedCategorie);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при добавлении категории' });
        }
    }
};
