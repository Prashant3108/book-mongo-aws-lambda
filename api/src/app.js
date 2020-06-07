const path = require('path')
const express = require('express')
const bookRouter = require('../src/router/book-router')
const authorRouter = require('../src/router/author-router')
const userRouter = require('../src/router/user-router')
const bodyParser = require('body-parser')
const auth = require('../src/middleware/auth')
require('../../api/src/db/mongoose')
// const emailService = require('../src/services/email-service')
// const userService = require('../src/services/user')

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../../public');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.json());
app.use(bookRouter);
app.use(authorRouter);
app.use('/api/user', userRouter);
app.use(function (req, res, next) {
    return res.status(404).send({ err: 'Not found' });
});

// userService.getUsers().then((data) => {
//     const userEmails = data.map((x) => x.email);
//     console.log(userEmails);
//     emailService.sendEmail(userEmails);
// });

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



