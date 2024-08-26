const { check } = require('express-validator');

const courseValidationRules = [
  check('name')
    .notEmpty().withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string'),

  check('beforeTime')
    .notEmpty().withMessage('BeforeTime is required')
    .isNumeric()
    .withMessage('BeforeTime must be a number'),

  check('afterTime')
    .notEmpty().withMessage('AfterTime is required')
    .isNumeric()
    .withMessage('AfterTime must be a number'),

  check('session')
    .notEmpty().withMessage('Session is required')
    .isNumeric()
    .withMessage('Session must be a number'),
];

module.exports = courseValidationRules;
