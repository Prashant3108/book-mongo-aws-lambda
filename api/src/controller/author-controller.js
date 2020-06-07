const authorService = require('../services/author')


exports.addAuthor = async function (req, res) {
    try {
        let author = await authorService.addAuthor(req.body);
        return res.status(201).json({
            result: author,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}
