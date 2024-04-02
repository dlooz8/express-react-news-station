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
    return res;
};

const postCreateNestedComment = async (req) => {
    return res;
};

const deleteComment = async (id) => {
    return res;
};

const deleteNestedComment = async (id) => {
    return res;
};

module.exports = {
    getComments,
    postCreateComment,
    postCreateNestedComment,
    deleteComment,
    deleteNestedComment,
};
