const { Router } = require('express');

const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');
const categoryRouter = require('./categoryRoutes');
const postRouter = require('./postRoutes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);
router.use(categoryRouter);
router.use(postRouter);

module.exports = router;