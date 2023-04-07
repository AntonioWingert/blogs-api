const { User } = require('../models');

const { generateToken } = require('../utils/auth');
const errorListener = require('../utils/errorListener');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw errorListener(400, 'Invalid fields');
  }

  const { displayName, id } = user;

  const token = generateToken({ id, displayName });

  return token;
};

module.exports = {
  login,
};