const mongoose = require('mongoose');
const db = require('../data/database');
const Order = require('../models/orders')(mongoose);
const { ObjectId } = mongoose.Types;
const orders = {};

orders.getAllOrders = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const orders = await db.getDB().collection('orders').find({}).toArray();

    res.setHeader('Content-Type', 'application/json');
    if (!orders.length) {
      return res.status(404).json({ message: 'No orders found.' });
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

orders.getOrderById = async (req, res) => {
  //#swagger.tags = ['Orders']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Order ID format.' });
  }

  try {
    const order = await db
      .getDB()
      .collection('orders')
      .findOne({ _id: ObjectId.createFromHexString(id) });

    res.setHeader('Content-Type', 'application/json');
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

orders.createOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  const newOrder = new Order({
    user_id: req.body.user_id,
    products: req.body.products,
    totalAmount: req.body.totalAmount,
    status: req.body.status,
    shippingAddress: req.body.shippingAddress
  });

  try {
    await newOrder.save();
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}

orders.updateOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Order ID format.' });
  }

  try {
    const order = await db
      .getDB()
      .collection('orders')
      .findOne({ _id: ObjectId.createFromHexString(id) });

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    await db
      .getDB()
      .collection('orders')
      .updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { ...req.body } });

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Order updated successfully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

orders.deleteOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Order ID format.' });
  }

  try {
    const order = await db
      .getDB()
      .collection('orders')
      .findOne({ _id: ObjectId.createFromHexString(id) });

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    await db
      .getDB()
      .collection('orders')
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Order deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = orders;