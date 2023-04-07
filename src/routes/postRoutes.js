const { Router } = require('express');
const authValidate = require('../middlewares/authValidate');
const postController = require('../controllers/postController');
const postValidate = require('../middlewares/postValidate');
const putPostValidate = require('../middlewares/putPostValidate');

const router = Router();

router.use(authValidate);
router.post('/post', postValidate, postController.create);
router.get('/post', postController.getAll);
router.get('/post/:id', postController.getById);
router.put('/post/:id', putPostValidate, postController.update);

module.exports = router;