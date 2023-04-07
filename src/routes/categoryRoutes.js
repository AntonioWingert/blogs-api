const { Router } = require('express');

const categoryController = require('../controllers/categoryController');

const authValidate = require('../middlewares/authValidate');
const categoryValidate = require('../middlewares/categoryValidate');

const router = Router();

router.use(authValidate);

router.post('/categories', categoryValidate, categoryController.create);

module.exports = router;