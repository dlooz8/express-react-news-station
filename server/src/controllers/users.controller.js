const usersService = require('../services/users.service')

const getAll = async (req, res) => {
    try {
        const users = await usersService.getAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersService.getById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAll,
    getById
}

// app.get('/articles/:articleId/comments', (req, res) => {
//     const { articleId } = req.params;
//     const comments = [];
//     // код для получения комментариев по articleId
//     res.json(comments);
//   });