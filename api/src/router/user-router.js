var express = require('express')
var router = express.Router()
const userController = require('../controller/user-controller')
const auth = require('../middleware/auth')

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.post('/logout', auth, userController.logout);



module.exports = router