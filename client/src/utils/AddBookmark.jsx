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
            toast((t) => (
                <span className="flex flex-col items-center text-center p-3 gap-4">
                    Новость уже была добавлена в закладки! Вы хотите ее удалить?
                    <button
                        className="flex justify-center items-center py-2 px-4 border-2 rounded-xl border-primary75"
                        onClick={() => {
                            DeleteBookmark(post_id, user_id);
                            toast.dismiss(t.id);
                        }}
                    >
                        Удалить
                    </button>
                </span>
            ));
        }
    }
};

export default AddBookmark;
