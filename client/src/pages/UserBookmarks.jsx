import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import Markdown from "react-markdown";
import app from "../utils/axiosConfig";
import toast from "react-hot-toast";

function UserBookmarks() {
    const { isUser } = useOutletContext();
    const [userBookmarks, setUserBookmarks] = useState([]);

    const getUserBookmarks = async () => {
        try {
            const response = await app.get(`/bookmarks/user-bookmarks/`, {
                params: {
                    user_id: isUser.id,
                },
            });
            setUserBookmarks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isUser.id !== undefined) {
            getUserBookmarks();
        }
    }, [isUser]);

    const handleDelete = async (bookmarkId) => {
        toast((t) => (
            <span className="flex flex-col items-center p-3 gap-4">
                <h5>Удалить эту новость из закладок?</h5>
                <button
                    className="flex justify-center items-center py-2 px-4 border-2 rounded-xl border-primary75"
                    onClick={() => {
                        toast.dismiss(t.id);
                        confirmDelete(bookmarkId);
                    }}
                >
                    <h5>Удалить</h5>
                </button>
            </span>
        ));
    };

    const confirmDelete = async (bookmarkId) => {
        try {
            await app.delete("/bookmarks/delete/", {
                params: {
                    id: bookmarkId,
                },
            });
            toast.success("Закладка удалена");
            getUserBookmarks();
        } catch (error) {
            console.error(error);
        }
    };

    const [currentPage, setCurrentPage] = useState(0);
    const newsPerPage = 12;
    const indexOfLastNews = (currentPage + 1) * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = userBookmarks.slice(indexOfFirstNews, indexOfLastNews);

    const nextPage = () => {
        if (indexOfLastNews < userBookmarks.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <ProfileBar />
            {userBookmarks.length > 0 ? (
                <div className="2xl:container 2xl:mx-auto xl:mx-32">
                    <div className="grid grid-cols-4 grid-rows-3 gap-8 py-10">
                        {currentNews.map((news, index) => (
                            <div key={index}>
                                <div className="flex flex-col justify-between gap-4 p-3 shadow rounded-xl items-center w-full h-full">
                                    <Link
                                        className="flex flex-col gap-3"
                                        to={`/news/${news.post.post_id}`}
                                    >
                                        <img
                                            className="min-w-full aspect-video object-cover rounded-xl"
                                            src={news.post.title_img}
                                            alt="popular"
                                        />
                                        <h5 className="line-clamp-1 self-start px-3">
                                            {news.post.theme}
                                        </h5>
                                        <Markdown className="markdown line-clamp-2 px-3">
                                            {news.post.text}
                                        </Markdown>
                                    </Link>
                                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 w-full">
                                        <img
                                            src={news.avatar_url}
                                            alt="avatar"
                                            className="w-[44px] h-[44px] object-cover rounded-xl"
                                        />
                                        <div className="flex flex-col flex-1 gap-1">
                                            <h6 className="line-clamp-1">
                                                {news.author}
                                            </h6>
                                            <p className="text-xs">
                                                {news.created_at_date}
                                            </p>
                                        </div>
                                        <div
                                            className="pr-2"
                                            onClick={() =>
                                                handleDelete(news.id)
                                            }
                                        >
                                            <svg
                                                width="16"
                                                height="21"
                                                viewBox="0 0 16 21"
                                                fill="#F81539"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z"
                                                    fillOpacity={0.75}
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between gap-4 my-12">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 0}
                            className="w-[40px] h-[40px] bg-gray rounded-xl flex items-center justify-center red-hover"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 18C13.7188 18 13.4688 17.9062 13.2812 17.7188L8.28125 12.7188C7.875 12.3438 7.875 11.6875 8.28125 11.3125L13.2812 6.3125C13.6562 5.90625 14.3125 5.90625 14.6875 6.3125C15.0938 6.6875 15.0938 7.34375 14.6875 7.71875L10.4062 12L14.6875 16.3125C15.0938 16.6875 15.0938 17.3438 14.6875 17.7188C14.5 17.9062 14.25 18 14 18Z"
                                    fillOpacity="0.5"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextPage}
                            disabled={indexOfLastNews >= userBookmarks.length}
                            className="w-[40px] h-[40px] bg-gray rounded-xl flex items-center justify-center red-hover"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="2xl:container 2xl:mx-auto xl:mx-32 text-center">
                    <h1 className="text-3xl font-bold text-primary75 p-10">
                        Вы еще не добавили закладки!
                    </h1>
                </div>
            )}
        </>
    );
}

export default UserBookmarks;
