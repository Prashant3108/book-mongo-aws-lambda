const Author = require('../models/author');

// Add Author
module.exports.addAuthor = async (author) => {
    const _author = new Author(author)
    await _author.save()
    return _author
}