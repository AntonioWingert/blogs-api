const { Router } = require('express');

const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);

module.exports = router;