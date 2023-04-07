const { Router } = require('express');
const authValidate = require('../middlewares/authValidate');
const postController = require('../controllers/postController');
const postValidate = require('../middlewares/postValidate');

const router = Router();

router.use(authValidate);
router.post('/post', postValidate, postController.create);
router.get('/post', postController.getAll);

module.exports = router;