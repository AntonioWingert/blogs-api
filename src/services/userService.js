const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const errorListener = require('../utils/errorListener');

const create = async (user) => {
  const { displayName, email, password, image } = user;

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    throw errorListener(409, 'User already registered');
  }

  const createdUser = await User.create({ displayName, email, password, image });

  const { id } = createdUser;

  const token = generateToken({ id, displayName });

  return token;
};

const getAll = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );

  return users;
};

module.exports = {
  create,
  getAll,
};