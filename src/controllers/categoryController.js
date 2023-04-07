const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await categoryService.create(name);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};