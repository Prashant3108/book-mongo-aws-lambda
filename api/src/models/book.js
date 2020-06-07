const mongoose = require('mongoose')

const Book = mongoose.model('Book', {

    publish_date: {
        type: Date,
        required: true,
    },
    book_name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Book