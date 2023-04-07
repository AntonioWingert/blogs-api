const { Router } = require('express');

const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');
const categoryRouter = require('./categoryRoutes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);
router.use(categoryRouter);

module.exports = router;