const Book = require('../models/book');
const emailService = require('../services/email-service');
const userService = require('../services/user');

module.exports.getBooks = async () => {
	const books = await Book.find({})
	return books;
}

// Get Book
module.exports.getBookById = async (id) => {
	const book = await Book.findById(id)
	return book;
}

// Add Book
module.exports.addBook = async (book) => {
	const _book = new Book(book)
	await _book.save()
	const users = await userService.getUsers();
	const userEmails = users.map((x) => x.email);
	emailService.sendEmail(userEmails);
	return _book
}

// Update Book
module.exports.updateBook = async (id, book) => {
	const _book = await Book.findByIdAndUpdate(id, book, { new: true, runValidators: true })
	return _book
}

// Delete Book
module.exports.removeBook = async (id) => {
	const book = await Book.findByIdAndDelete(id)
	return book;
}
