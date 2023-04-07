const postService = require('../services/postService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const post = await postService.create(title, content, categoryIds, id);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;
    const posts = await postService.getAll(id);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};