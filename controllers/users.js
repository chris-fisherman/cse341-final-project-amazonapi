const mongoose = require('mongoose');
const db = require('../data/database');
const Auth = require('../helpers/auth');
const User = require('../models/user')(mongoose);
const { ObjectId } = mongoose.Types;

const getAll = async (req, res) => {
  //#swagger.tags = ['Users']
  try {
    const users = await db.getDB().collection('users').find({}).toArray();

    res.setHeader('Content-Type', 'application/json');
    if (!users.length) {
      return res.status(404).json({ message: 'No users found.' });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags = ['Users']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid User ID format.' });
  }

  try {
    const user = await db
      .getDB()
      .collection('users')
      .findOne({ _id: ObjectId.createFromHexString(id) });

    res.setHeader('Content-Type', 'application/json');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  //#swagger.tags = ['Users']
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    image: req.body.image,
    email: req.body.email
  });

  try {
    await newUser.save();
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const updateUser = async (req, res) => {
  //#swagger.tags = ['Users']
  const updatedUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    image: req.body.image,
    email: req.body.email
  });

  if (!updatedUser) {
    return res.status(400).json({ message: 'No user data provided.' });
  }

  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID format.' });
  }

  try {
    const update = await db
      .getDB()
      .collection('users')
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
      return res.status(404).json({ error: 'User do not has been updated.' });
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const deleteUser = async (req, res) => {
  //#swagger.tags = ['Users']
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid User ID format.' });
  }

  try {
    await db
      .getDB()
      .collection('users')
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

const loginUser = async (req, res) => {
  //#swagger.tags = ['Users']

  try {
    const user = await db
      .getDB()
      .collection('users')
      .findOne({ username: req.body.username, password: req.body.password });
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).json({
      ...user,
      token: Auth.sign({ identifier: user._id.toString() })
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};
