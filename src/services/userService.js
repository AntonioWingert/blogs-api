const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const errorListener = require('../utils/errorListener');

const create = async (user) => {
  const { displayName, email, password, image } = user;

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    throw errorListener(409, 'User already registered');
  }

  await User.create({ displayName, email, password, image });

  const token = generateToken({ displayName, email, image });

  return token;
};

module.exports = {
  create,
};