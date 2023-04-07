const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required().label('name'),
}).messages({
  'string.empty': '"{#label}" is required',
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
};