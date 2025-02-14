const { check } = require('express-validator');
const { ObjectId } = require('mongodb');

const isValidId = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error('Invalid Id');
  }
};

const getUserValidations = (req, res, next) => {
  return [
    check('firstName').isLength({ min: 2 }),
    check('lastName').isLength({ min: 2 }),
    check('password').isLength({ min: 2 }),
    check('username').isLength({ min: 2 }),
    check('image').isLength({ min: 10 }),
    check('email').isEmail()
  ];
};

const getProductValidation = (req, res, next) => {
  return [
    check('title').isLength({ min: 4 }),
    check('description').isLength({ min: 4 }),
    check('rating').isNumeric(),
    check('image').isLength({ min: 4 }),
    check('userId').custom(isValidId),
    check('category').custom(isValidId)
  ];
};

module.exports = {
  getUserValidations,
  getProductValidation
};
