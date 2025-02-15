const routes = require('express').Router();
const orders = require('../controllers/orders');
const { validateOrders } = require('../middlewares/validator');

routes.get('/', orders.getAllOrders);
routes.get('/:id', orders.getOrderById);
routes.post('/', validateOrders, orders.createOrder);
routes.put('/:id', validateOrders, orders.updateOrder);
routes.delete('/:id', orders.deleteOrder);

module.exports = routes;
