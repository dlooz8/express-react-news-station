import app from "./axiosConfig";
import { toast } from "react-hot-toast";

const DeleteBookmark = async (post_id, user_id) => {
    if (!user_id) {
        toast.error(
            "Для удаления новостей из закладок необходимо авторизоваться!"
        );
    } else if (user_id) {
        try {
            const response = await app.delete("/bookmarks/delete/userid", {
                params: {
                    user_id,
                    post_id,
                },
            });
            toast.success("Новость удалена из закладок!");
            return response;
        } catch (error) {
            toast.error("Ошибка удаления закладки");
            return error;
        }
    }
};

export default DeleteBookmark;
