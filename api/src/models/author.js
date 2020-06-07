const mongoose = require('mongoose')
const validator = require('validator')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }

})

authorSchema.virtual('books', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'author_id'
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author