const usersService = require('../services/users.service')

const getAll = async (req, res) => {
    const users = await usersService.getAll();
    return res.status(200).json(users);
}

module.exports = {
    getAll
}

// app.get('/articles/:articleId/comments', (req, res) => {
//     const { articleId } = req.params;
//     const comments = [];
//     // код для получения комментариев по articleId
//     res.json(comments);
//   });