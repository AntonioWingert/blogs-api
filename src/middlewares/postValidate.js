const { postSchema } = require('../joi/schemas');
const errorListener = require('../utils/errorListener');

const postValidate = async (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) {
    next(errorListener(400, 'Some required fields are missing'));
  }

  next();
};

module.exports = postValidate;