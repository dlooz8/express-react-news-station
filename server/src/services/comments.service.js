const prisma = require("../config/prisma");

const getComments = async (post_id) => {
    const comments = await prisma.Comments.findMany({
        where: {
            post_id: post_id,
        },
    });
    for (const comment of comments) {
        const user = await prisma.users.findUnique({
            where: {
                id: comment.user_id,
            },
        });
        const nestedComments = await prisma.NestedComments.findMany({
            where: {
                parent_comment_id: comment.id,
            },
        });
        comment.nestedComments = nestedComments;

        const options = {
            timeZone: "Europe/Moscow",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const createdDate = new Date(comment.created_at)
            .toLocaleDateString("ru-RU", options)
            .replace(" г.", "");
        const dateArray = createdDate.split(" ");
        comment.created_at_date = `${dateArray[0]} ${
            dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)
        } ${dateArray[2]}`;
        comment.user = user;

        for (const nestedComment of nestedComments) {
            const nestedUser = await prisma.users.findUnique({
                where: {
                    id: nestedComment.user_id,
                },
            });
            const createdDate = new Date(nestedComment.created_at)
                .toLocaleDateString("ru-RU", options)
                .replace(" г.", "");
            const dateArray = createdDate.split(" ");
            nestedComment.created_at_date = `${dateArray[0]} ${
                dateArray[1].charAt(0).toUpperCase() + dateArray[1].slice(1)
            } ${dateArray[2]}`;
            nestedComment.user = nestedUser;
        }
    }
    return comments;
};

const postCreateComment = async (req) => {
    if (req.body.parent_comment_id) {
        const result = await prisma.NestedComments.create({
            data: {
                post_id: req.body.post_id,
                user_id: req.body.user_id,
                parent_comment_id: req.body.parent_comment_id,
                text: req.body.text,
            },
        });
        return result;
    } else {
        const result = await prisma.Comments.create({
            data: {
                user_id: req.body.user_id,
                post_id: req.body.post_id,
                text: req.body.text,
            },
        });
        return result;
    }
};

const deleteComment = async (id) => {
    const result = await prisma.Comments.delete({
        where: {
            id: id,
        },
    });
    return result;
};

const deleteNestedComment = async (id) => {
    const result = await prisma.NestedComments.delete({
        where: {
            id: id,
        },
    });
    return result;
};

module.exports = {
    getComments,
    postCreateComment,
    deleteComment,
    deleteNestedComment,
};
