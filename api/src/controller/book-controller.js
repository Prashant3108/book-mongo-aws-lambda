const bookService = require('../services/book-store')

exports.getBooks = async (req, res) => {
    try {
        let books = await bookService.getBooks();
        return res.status(200).json({
            result: books,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }
}

exports.getBook = async function (req, res) {

    let book_id = req.params.book_id

    try {
        let book = await bookService.getBookById(book_id);
        return res.status(200).json({
            result: book || 'No Record Found',
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }



}

exports.addBook = async function (req, res) {

    let book_name = req.body.book_name
    let author_id = req.body.author_id
    let publish_date = req.body.publish_date
    let genre = req.body.genre

    try {
        let book = await bookService.addBook({ book_name, author_id, publish_date, genre, created_by: req.user._id });
        return res.status(201).json({
            result: book,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.updateBook = async function (req, res) {
    let book_id = req.params.book_id

    try {
        const book = await bookService.updateBook(book_id, req.body);
        return res.status(201).json({
            result: book,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.removeBook = async function (req, res) {

    let book_id = req.params.book_id

    try {
        const book = await bookService.removeBook(book_id);
        return res.status(200).json({
            result: book,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }




}