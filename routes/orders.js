const routes = require('express').Router();
const orders = require('../controllers/orders');

routes.get('/', orders.getAllOrders);
routes.get('/:id', orders.getOrderById);
routes.post('/', orders.createOrder);
routes.put('/:id', orders.updateOrder);
routes.delete('/:id', orders.deleteOrder);

module.exports = routes;