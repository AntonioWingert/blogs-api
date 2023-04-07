const { verifyToken } = require('../utils/auth');
const errorListener = require('../utils/errorListener');

const authValidate = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
   throw errorListener(401, 'Token not found');
  }

  const validToken = verifyToken(authorization);

  if (!validToken) {
    throw errorListener(401, 'Expired or invalid token');
  }

  req.user = validToken;
  
  next();
};

module.exports = authValidate;