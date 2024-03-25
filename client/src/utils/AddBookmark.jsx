import app from "./axiosConfig";
import { toast } from "react-hot-toast";
import DeleteBookmark from "./DeleteBookmark";

const AddBookmark = async (post_id, user_id) => {
    if (!user_id) {
        toast.error(
            "Для добавления новостей в закладки необходимо авторизоваться!"
        );
    } else if (user_id) {
        try {
            await app.post("/bookmarks/create", {
                user_id,
                post_id,
            });
            toast.success("Новость добавлена в закладки!");
        } catch (error) {
            toast(() => (
                <span>
                    Новость уже была добавлена в закладки! Вы хотите ее
                    удалить?
                    <button onClick={() => DeleteBookmark(post_id, user_id)}>
                        Удалить
                    </button>
                </span>
            ));
        }
    }
};

export default AddBookmark;
