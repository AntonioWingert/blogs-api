const { Router } = require('express');

const loginRouter = require('./loginRoutes');

const router = Router();

router.use(loginRouter);

module.exports = router;