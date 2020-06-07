var express = require('express')
var router = express.Router()
const authorController = require('../controller/author-controller')

router.post('/api/author', authorController.addAuthor);

module.exports = router