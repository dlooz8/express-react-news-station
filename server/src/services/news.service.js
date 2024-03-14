const prisma = require('../config/prisma');

const postCreateNews = async (req, res) => {
    const { theme, text, category, title_img, user_id} = req.body;
    const news = await prisma.posts.create({
        data: {
            theme,
            text,
            category,
            title_img,
            user_id
        }
    });
    res.json(news);
}

const getCurrentNews = async(news_id) => {
    const posts = await prisma.posts.findMany({
        where: {
            post_id:  news_id
        }
    });
    if (posts.length === 0) {
        throw new Error('Новость не найдена');
    } else {
        const newPosts = await Promise.all(posts.map(formatPost));
        return newPosts;
    }
}

const getUserNews = async (user_id) => {
    const posts = await prisma.posts.findMany({
        where: {
            user_id
        }
    });
    return posts;
}

const getNewsWithAuthor = async (posts) => {
    return await Promise.all(posts.map(formatPost));
};

const getLatestNews = async() => {
    const posts = await prisma.posts.findMany({
        orderBy: {
            created_at: 'desc'
        },
        take: 6
    })

    return await getNewsWithAuthor(posts);
}

const getRecentNews = async() => {
    const recentPosts = await prisma.posts.findMany({
        orderBy: {
            created_at: 'desc'
        },
        take: 3
    })
    return recentPosts;
}

const getHotSportNews = async() => {
    const hotSportPosts = await prisma.posts.findMany({
        orderBy: {
            created_at: 'desc',
        },
        where: {
            category: 'sport'
        },
        take: 12
    })
    return hotSportPosts;
}

const getPopularNews = async () => {
    const posts = await prisma.posts.findMany({
        orderBy: {
            count_likes: 'desc'
        },
        take: 12
    });
    return await getNewsWithAuthor(posts);
}

const getTrendyNews = async () => {
    const posts = await prisma.posts.findMany({
        orderBy: {
            count_bookmarks: 'desc'
        },
        take: 12
    });
    return await getNewsWithAuthor(posts);
}

const formatPost = async (post) => {
    const author = await prisma.users.findUnique({
        where: {
            id: post.user_id
        }
    });

    const options = {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const createdDate = new Date(post.created_at).toLocaleDateString('ru-RU', options).replace(' г.', '');
    const dateArray = createdDate.split(' ');
    const formattedDate = `${dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)} ${dateArray[0]}, ${dateArray[2]}`;
    const createdTime = new Date(post.created_at).toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' });
    
    return { ...post, author: author.name, avatar_url: author.avatar_url, created_at_date: formattedDate, created_at_time: createdTime };
};

const deleteNews = async (news_id) => {
    const news = await prisma.posts.delete({
        where: {
            post_id: news_id
        }
    })
    return news;
}

module.exports = {
    postCreateNews,
    deleteNews,
    getPopularNews,
    getRecentNews,
    getHotSportNews,
    getLatestNews,
    getTrendyNews,
    getCurrentNews,
    getUserNews,
}