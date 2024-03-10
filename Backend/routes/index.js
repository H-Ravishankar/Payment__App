const express = require('express')
const Router = express.Router();
const userRouter = require('./user')

router.use('/user',userRouter)
module.exports = router