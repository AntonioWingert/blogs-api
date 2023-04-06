const { userSchema } = require('../joi/schemas');
const errorListener = require('../utils/errorListener');

const userValidate = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    throw errorListener(400, error.details[0].message);
  }

  next();
};

module.exports = userValidate;