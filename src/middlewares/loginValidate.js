const { loginSchema } = require('../joi/schemas');
const errorListener = require('../utils/errorListener');

const loginValidate = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    throw errorListener(400, 'Some required fields are missing');
  }

  next();
};

module.exports = loginValidate;