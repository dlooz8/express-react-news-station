const prisma = require('../config/prisma');

const newsController = {
    addNews: async (req, res) => {
        const { theme, text, category, title_img, user_id} = req.body;
        try {
            const news = await prisma.posts.create({
                data: {
                    theme,
                    text,
                    category,
                    title_img,
                    user_id
                }
            });
            res.status(200).json(news);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
};

module.exports = newsController;