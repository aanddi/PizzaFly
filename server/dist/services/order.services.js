import AppDataSource from '../config/db.config.js';
import { OrderDesc } from '../entities/order-desc.entity.js';
import { Order } from '../entities/order.entity.js';
const orderRepository = AppDataSource.getRepository(Order);
const orderDescRepository = AppDataSource.getRepository(OrderDesc);
export const OrderService = {
    async newOrder(req, res) {
        //==== Создание заказа
        const productsOrder = req.body.products;
        // расчет полной цена за все позиции с учетом
        // const totalPricetotalPrice = productsOrder.reduce(
        //    (acc, product) => acc + (product.price - (product.price * product.discount) / 100) * product.count,
        //    0
        // )
        const newOrder = new Order();
        newOrder.user = req.body.userId;
        newOrder.price = req.body.price;
        newOrder.payment = req.body.payment;
        newOrder.comment = req.body.comment;
        newOrder.promocode = req.body.promocode;
        newOrder.discont = req.body.discont;
        newOrder.status = 'Выполнен';
        const savedOrder = await orderRepository.save(newOrder);
        //==== Создание описания заказа
        const orderId = savedOrder.id;
        for (const product of productsOrder) {
            const newOrderDesc = new OrderDesc();
            // расчет полной стоимости позиции с учетом количества и скидки на позицию
            const totalPrice = product.price * (1 - product.discount / 100) * product.count;
            newOrderDesc.order = orderId; // ??
            newOrderDesc.products = product.id; // ??
            newOrderDesc.count = product.count;
            newOrderDesc.cost = totalPrice;
            newOrderDesc.price = product.price;
            newOrderDesc.discount = product.discount;
            await orderDescRepository.save(newOrderDesc);
        }
        res.json(savedOrder);
    }
};
