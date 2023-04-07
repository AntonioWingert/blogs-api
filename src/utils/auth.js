const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', algorithm: 'HS256',
  });

  return token;
};

const verifyToken = (token) => {
  const validToken = jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return false;
    }

    return decoded;
  });

  return validToken;
};

module.exports = {
  generateToken,
  verifyToken,
};