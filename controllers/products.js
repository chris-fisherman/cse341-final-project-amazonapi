const mongoose = require('mongoose');
const db = require('../data/database');
const Product = require('../models/products')(mongoose);
const { ObjectId } = mongoose.Types;

const getAll = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const products = await db.getDB().collection('products').find({}).toArray();

    res.setHeader('Content-Type', 'application/json');
    if (!products.length) {
      return res.status(404).json({ message: 'No products found.' });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags = ['Products']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Product ID format.' });
  }

  try {
    const product = await db
      .getDB()
      .collection('products')
      .findOne({ _id: ObjectId.createFromHexString(id) });

    res.setHeader('Content-Type', 'application/json');
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    image: req.body.image,
    categoryId: req.body.categoryId,
    userId: req.body.userId
  });

  try {
    await newProduct.save();
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const updateProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  const updatedProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    image: req.body.image,
    categories: req.body.categories,
    userId: req.body.userId
  });

  if (!updatedProduct) {
    return res.status(400).json({ message: 'No Product data provided.' });
  }

  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Product ID format.' });
  }

  try {
    const update = await db
      .getDB()
      .collection('products')
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        {
          $set: {
            ...req.body
          }
        }
      );
    console.log(update);
    if (!update) {
      return res.status(404).json({ error: 'Product do not has been updated.' });
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Product updated successfully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const deleteProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Product ID format.' });
  }

  try {
    await db
      .getDB()
      .collection('products')
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

module.exports = {
  getAll,
  getSingle,
  createProduct,
  updateProduct,
  deleteProduct
};
