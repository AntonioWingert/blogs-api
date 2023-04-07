const { Router } = require('express');
const userController = require('../controllers/userController');
const userValidate = require('../middlewares/userValidate');
const authValidate = require('../middlewares/authValidate');

const router = Router();

router.post('/user', userValidate, userController.create);

router.use(authValidate);

router.get('/user', userController.getAll);

router.get('/user/:id', userController.getById);

module.exports = router;