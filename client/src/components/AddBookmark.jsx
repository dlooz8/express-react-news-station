import app from "../utils/axiosConfig";

const AddBookmark = async (post_id, user_id) => {
    try {
        const response = await app.post("/bookmarks/create", {
            user_id,
            post_id,
        });

        return response;
    } catch (error) {
        console.error("Ошибка добавления новой закладки:", error);
        return error;
    }
};

// const DeleteBookmark = async (post_id, user_id) => {
//     try {
//         const response = await app.delete("/bookmarks/delete", {
//             params: {
//                 user_id,
//                 post_id,
//             },
//         });

//         return response;
//     } catch (error) {
//         console.error("Ошибка удаления закладки:", error);
//         return error;
//     }
// };

export default AddBookmark;
