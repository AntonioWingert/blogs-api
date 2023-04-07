const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image = '' } = req.body;
    const token = await userService.create({ displayName, email, password, image });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};