const prisma = require('../config/prisma');

// const getCurrentPost = async(post_id) => {
//     const posts = await prisma.posts.findMany({
//         where: {
//             post_id:  post_id
//         }
//     })

//     const newPosts = await Promise.all(posts.map(async (post) => {
//         const author = await prisma.users.findUnique({
//             where: {
//                 id: post.user_id
//             }
//         });
//         const options = {
//             timeZone: 'Europe/Moscow',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         };
//         const createdDate = new Date(post.created_at).toLocaleDateString('ru-RU', options).replace(' г.', '');

//         const dateArray = createdDate.split(' ');
//         const formattedDate = `${dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)} ${dateArray[0]}, ${dateArray[2]}`;
      
//         const createdTime = new Date(post.created_at).toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' });
//         return { ...post, author: author.name, avatar_url: author.avatar_url, created_at_date: formattedDate, created_at_time: createdTime }; // Добавляем имя автора к данным поста
//     }));

//     return newPosts;
// }

// module.exports = {
//     getUserBookmarks,
    
// }