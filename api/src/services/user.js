const User = require('../models/user');


module.exports.getUsers = async () => {
    const users = await User.find({})
    return users;
}

module.exports.login = async (email, pwd) => {
    const user = await User.findByCredentials(email, pwd)
    const token = await user.generateAuthToken()
    return { user, token }
}

// Get Book
module.exports.logout = async (user) => {
    user.tokens = []
    await user.save()
}

// Add User
module.exports.signUp = async (user) => {
    const _user = new User(user)
    await _user.save()
    return _user
}


