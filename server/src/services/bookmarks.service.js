const prisma = require("../config/prisma");

const postCreateBookmark = async (req) => {
    const { user_id, post_id } = req.body;
    const existingBookmark = await prisma.bookmarks.findFirst({
        where: {
            user_id,
            post_id,
        },
    });

    if (existingBookmark) {
        throw new Error("Эта новость уже добавлена в закладки");
    }

    const bookmark = await prisma.bookmarks.create({
        data: {
            user_id,
            post_id,
        },
    });
    return bookmark;
};

const deleteBookmark = async (id) => {
    const bookmark = await prisma.bookmarks.delete({
        where: {
            id: id,
        },
    });
    return bookmark;
};

const deleteBookmarkUserId = async (user_id, post_id) => {
    const bookmark = await prisma.bookmarks.findFirst({
        where: {
            user_id: user_id,
            post_id: post_id,
        },
    });
    deleteBookmark(bookmark.id);
    return bookmark;
};

const getUserBookmarks = async (user_id) => {
    const bookmarks = await prisma.bookmarks.findMany({
        where: {
            user_id,
        },
    });

    const bookmarksWithPostsAndAuthors = await Promise.all(
        bookmarks.map(async (bookmark) => {
            const post = await prisma.posts.findUnique({
                where: {
                    post_id: bookmark.post_id,
                },
            });
            const author = await prisma.users.findUnique({
                where: {
                    id: post.user_id,
                },
            });

            const options = {
                timeZone: "Europe/Moscow",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            const createdDate = new Date(post.created_at)
                .toLocaleDateString("ru-RU", options)
                .replace(" г.", "");
            const dateArray = createdDate.split(" ");
            const formattedDate = `${
                dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)
            } ${dateArray[0]}, ${dateArray[2]}`;

            return {
                ...bookmark,
                post,
                author: author.name,
                avatar_url: author.avatar_url,
                created_at_date: formattedDate,
                created_at: post.created_at,
            };
        })
    );

    bookmarksWithPostsAndAuthors.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    return bookmarksWithPostsAndAuthors;
};

module.exports = {
    getUserBookmarks,
    deleteBookmark,
    deleteBookmarkUserId,
    postCreateBookmark,
};
