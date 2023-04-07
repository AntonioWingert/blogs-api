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

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    throw errorListener(404, 'User does not exist');
  }

  return user;
};

const remove = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};