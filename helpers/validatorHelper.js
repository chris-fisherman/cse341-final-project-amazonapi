/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const Validator = require('validatorjs');

/****************************/
/*** VALIDATOR ***/
/****************************/
const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => {
    callback(null, true);
  });
  validation.fails(() => {
    callback(validation.errors, false);
  });
};

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = validator;
