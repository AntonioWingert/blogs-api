const { categorySchema } = require('../joi/schemas');
const errorListener = require('../utils/errorListener');

const categoryValidate = (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    throw errorListener(400, error.details[0].message);
  }

  next();
};

module.exports = categoryValidate;