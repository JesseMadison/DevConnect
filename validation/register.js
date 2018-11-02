const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let err = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.anme = "Name must be between 2 and 30 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
