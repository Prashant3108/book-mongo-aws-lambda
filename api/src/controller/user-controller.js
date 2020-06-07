const userService = require('../services/user')

exports.signUp = async (req, res) => {
    try {
        let user = await userService.signUp(req.body)
        return res.status(201).json({
            result: user,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }
}

exports.login = async (req, res) => {
    try {
        let user = await userService.login(req.body.email, req.body.password)
        return res.status(200).json({
            result: user,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: 'Wrong Username or Password',
            status: false
        })
    }



}

exports.logout = async function (req, res) {
    try {
        await userService.logout(req.user)
        return res.status(201).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}


