const mongoose = require('mongoose');
const db = require('../data/database');
const Category = require('../models/categories')(mongoose);
const { ObjectId } = mongoose.Types;

const getAllCategories = async (req, res) => {
  try {
    const categories = await db.getDB()
      .collection('categories')
      .find({})
      .toArray();
    
    res.setHeader('Content-Type', 'application/json');
    if (!categories.length) {
      return res.status(404).json({ message: 'No categories found.' });
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getCategoryById = async (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Category ID format.' });
  }

  try {
    const category = await db
      .getDB()
      .collection('categories')
      .findOne({ _id: ObjectId.createFromHexString(id) });
    
    res.setHeader('Content-Type', 'application/json');
    if (!category) {
      return res.status(404).json({ message: 'Category not found.' });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    await newCategory.save();
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}

const updateCategory = async (req, res) => {
  const getUpdates = req.body;

  if (!getUpdates) {
    return res.status(400).json({ message: 'No category data provided.' });
  }

  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Category ID format.' });
  }

  try {
    const update = await db
      .getDB()
      .collection('categories')
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        { $set: getUpdates },
        {
          new: true,
          upsert: false,
        }
      );

    if (!update) {
      return res.status(404).json({ error: 'Category do not has been updated.' });
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'Category updated successfully.' });
  }
  catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory
};
