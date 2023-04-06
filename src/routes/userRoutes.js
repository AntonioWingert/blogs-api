const { Router } = require('express');
const userController = require('../controllers/userController');
const userValidate = require('../middlewares/userValidate');

const router = Router();

router.post('/user', userValidate, userController.create);

module.exports = router;