import app from "../utils/axiosConfig";

const DeleteBookmark = async (post_id, user_id) => {
    try {
        const response = await app.delete("/bookmarks/delete", {
            params: {
                user_id,
                post_id,
            },
        });

        return response;
    } catch (error) {
        console.error("Ошибка удаления закладки:", error);
        return error;
    }
};

export default DeleteBookmark;
