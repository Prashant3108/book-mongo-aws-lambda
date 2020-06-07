var express = require('express')
var router = express.Router()
const auth = require('../middleware/auth')
const bookController = require('../controller/book-controller')

router.get('/api/books', auth, bookController.getBooks);

router.get('/api/book/:book_id', auth, bookController.getBook);

router.post('/api/book', auth, bookController.addBook);

router.patch('/api/book/:book_id', auth, bookController.updateBook);

router.delete('/api/book/:book_id', auth, bookController.removeBook);

module.exports = router