const prisma = require('../config/prisma');
const { handleDelete } = require('../config/cloudinary');

const postCreateNews = async (req, res) => {
    const { theme, text, tags, category, title_img, user_id} = req.body;
    const news = await prisma.posts.create({
        data: {
            theme,
            text,
            tags,
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
        const newPosts = await Promise.all(posts.map(formatUser));
        return newPosts;
    }
}

const getSearchNews = async(query, sort) => {
    const searchWords = query.split(' ').filter(word => word.trim() !== '');
    if(query === 'все') {
        const posts = await prisma.posts.findMany({
            orderBy: {
                created_at: sort
            },
            include: {
                users: true
            }
        });

        return await formattedPosts(posts);
    } else {
        const posts = await prisma.posts.findMany({
            where: {
                AND: searchWords.map(word => ({
                    OR: [
                        { category: { contains: word, mode: 'insensitive' } },
                        { tags: { contains: word, mode: 'insensitive' } },
                        { theme: { contains: word, mode: 'insensitive' } }  
                    ]
                }))
            },
            orderBy: {
                created_at: sort
            },
            include: {
                users: true
            }
        });

        return await formattedPosts(posts);
    }
}

const getUserNews = async (user_id) => {
    if (process.env.ADMIN_ID === user_id) {
        const posts = await prisma.posts.findMany({
            orderBy: {
                created_at: "desc"
            },
        });
    
        const options = {
            timeZone: 'Europe/Moscow',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
    
        return await formattedPosts(posts);
    } else {
        const posts = await prisma.posts.findMany({
            where: {
                user_id
            },
            orderBy: {
                created_at: "desc"
            },
        });
    
        return await formattedPosts(posts);
    }
}

const formattedPosts = async(posts) => {
    const options = {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedPosts = posts.map(post => {
        const createdDate = new Date(post.created_at).toLocaleDateString('ru-RU', options).replace(' г.', '');
        const dateArray = createdDate.split(' ');
        const formattedDate = `${dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)} ${dateArray[0]}, ${dateArray[2]}`;
        
        return { ...post, created_at_date: formattedDate };
    });

    return await formattedPosts;
}

const getNewsWithAuthor = async (posts) => {
    return await Promise.all(posts.map(formatUser));
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
            category: 'Спорт'
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

const formatUser = async (post) => {
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
    const post = await prisma.posts.findUnique({
        where: {
            post_id: news_id
        }
    })

    if (!post) {
        throw new Error('Новость не найдена');
    } else {
        await handleDelete(post.title_img);
        const news = await prisma.posts.delete({
            where: {
                post_id: news_id
            }
        })
        return news;
    }
}

module.exports = {
    postCreateNews,
    deleteNews,
    getPopularNews,
    getRecentNews,
    getHotSportNews,
    getSearchNews,
    getLatestNews,
    getTrendyNews,
    getCurrentNews,
    getUserNews,
}