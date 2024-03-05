const prisma = require('../config/prisma');

const deleteBookmark = async (id) => {
    const bookmark = await prisma.bookmarks.delete({
        where: {
            id: id
        }
    });
}

const getUserBookmarks = async (req) => {
    const bookmarks = await prisma.bookmarks.findMany({
      where: {
        user_id: req.query.user_id
      }
    });
  
    const bookmarksWithPostsAndAuthors = await Promise.all(bookmarks.map(async (bookmark) => {
      const post = await prisma.posts.findUnique({
        where: {
          post_id: bookmark.post_id
        }
      });
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
      
      return { ...bookmark, post, author: author.name, avatar_url: author.avatar_url, created_at_date: formattedDate, created_at: post.created_at };
    }));
  
    bookmarksWithPostsAndAuthors.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
    return bookmarksWithPostsAndAuthors;
  }

module.exports = {
    getUserBookmarks,
    deleteBookmark,
    
}