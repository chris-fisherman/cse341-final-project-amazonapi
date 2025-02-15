/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const validator = require('../helpers/validatorHelper');

/****************************/
/*** CATEGORIES ***/
/****************************/
const validateCategories = (req, res, next) => {
  const validationRule = {
    name: 'required|string|min:2',
    description: 'required|string|min:2'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

/****************************/
/*** USERS ***/
/****************************/
const validateUsers = (req, res, next) => {
  const validationRule = {
    userId: 'required|alpha_num|min:24|max:24',
    firstName: 'required|string|min:2',
    lastName: 'required|string|min:2',
    username: 'required|string|min:5',
    password: 'required|string|min:8',
    image: 'required|string|min:5',
    email: 'required|email'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

/****************************/
/*** PRODUCTS ***/
/****************************/
const validateProducts = (req, res, next) => {
  const validationRule = {
    title: 'required|string|min:2',
    description: 'required|string|min:2',
    rating: 'required|numeric|max:10',
    image: 'required|string|min:5',
    categoryId: 'required|alpha_num|min:24|max:24',
    userId: 'required|alpha_num|min:24|max:24'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

/****************************/
/*** ORDERS ***/
/****************************/
const validateOrders = (req, res, next) => {
  const validationRule = {
    user_id: 'required|alpha_num|min:24|max:24',
    totalAmount: 'required|integer',
    status: 'required|string',
    shippingAddress: {
      street: 'required|string|min:1',
      city: 'required|string|min:2',
      state: 'required|string|min:2',
      country: 'required|string|min:2',
      zip: 'required|integer|min:1'
    }
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = {
  validateCategories,
  validateUsers,
  validateProducts,
  validateOrders
};
