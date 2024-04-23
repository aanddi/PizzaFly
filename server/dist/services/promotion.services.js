import AppDataSource from '../config/db.config.js';
import { Order } from '../entities/order.entity.js';
import { Promotion } from '../entities/promotion.entity.js';
import { User } from '../entities/user.entity.js';
const promotionRepository = AppDataSource.getRepository(Promotion);
const userRepository = AppDataSource.getRepository(User);
const orderRepository = AppDataSource.getRepository(Order);
export const PromotionService = {
    async getPromotions(req, res) {
        const promotions = await promotionRepository.find();
        res.json(promotions);
    },
    async addItem(req, res) {
        try {
            const newPromotion = new Promotion();
            newPromotion.name = req.body.name;
            newPromotion.desc = req.body.desc;
            newPromotion.banner = req.body.banner;
            newPromotion.promocode = req.body.promocode;
            const savedPromotions = await promotionRepository.save(newPromotion);
            res.json(savedPromotions);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка добавлении акции' });
        }
    },
    async editItem(req, res) {
        const promotionId = req.params.id;
        const existingPromotion = await promotionRepository.findOne({ where: { id: +promotionId } });
        if (!existingPromotion)
            return res.status(404).json({ message: 'Акция не найдена' });
        try {
            existingPromotion.name = req.body.name;
            existingPromotion.desc = req.body.desc;
            existingPromotion.banner = req.body.banner;
            existingPromotion.promocode = req.body.promocode;
            const updatedPromotion = await promotionRepository.save(existingPromotion);
            res.json(updatedPromotion);
        }
        catch (error) {
            res.status(500).json({ message: 'Ошибка при редактировании акции' });
        }
    },
    async check(req, res) {
        const price = req.body.price;
        const promocode = req.body.promocode;
        const userId = req.body.idUser;
        const nullDiscont = {
            promocode: null,
            discount: 0
        };
        if (promocode.toUpperCase() == 'НОВЫЙ') {
            const userOrders = await orderRepository.find({
                where: {
                    user: {
                        id: +userId
                    }
                }
            });
            if (userOrders.length === 0) {
                const response = {
                    promocode: promocode,
                    discount: 15
                };
                res.json(response);
            }
            else
                res.json(nullDiscont);
        }
        else if (promocode.toUpperCase() == 'КЛАСС') {
            if (+price >= 1500) {
                const response = {
                    promocode: promocode,
                    discount: 10
                };
                res.json(response);
            }
            else
                res.json(nullDiscont);
        }
        else if (promocode.toUpperCase() == 'СУПЕР') {
            if (+price >= 2500) {
                const response = {
                    promocode: promocode,
                    discount: 20
                };
                res.json(response);
            }
            else
                res.json(nullDiscont);
        }
        else
            res.json(nullDiscont);
    }
};
