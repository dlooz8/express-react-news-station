const usersService = require('../services/users.service')

const getAll = async (req, res) => {
    const users = await usersService.getAll();
    return res.status(200).json(users);
}

module.exports = {
    getAll
}