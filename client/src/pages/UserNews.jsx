import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import Markdown from "react-markdown";
import app from "../utils/axiosConfig";
import toast from "react-hot-toast";

function UserNews() {
    const { isUser } = useOutletContext();
    const [userNews, setUserNews] = useState([]);
    const navigate = useNavigate();

    const getUserNews = async () => {
        try {
            const response = await app.get("/news/user-news/", {
                params: {
                    user_id: isUser.id,
                },
            });
            setUserNews(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isUser.id !== undefined) {
            getUserNews();
        } else {
            navigate("/");
            toast.error(<h5 className="text-center">Для доступа к данной странице вам необходимо авторизоваться</h5>);
        }
    }, [isUser]);

    const handleDelete = async (newsId) => {
        toast((t) => (
            <span className="flex flex-col items-center p-3 gap-4">
                <h5>Удалить эту новость?</h5>
                <button
                    className="flex justify-center items-center py-2 px-4 border-2 rounded-xl border-primary75"
                    onClick={() => {
                        toast.dismiss(t.id);
                        confirmDelete(newsId);
                    }}
                >
                    <h5>Удалить</h5>
                </button>
            </span>
        ));
    };

    const confirmDelete = async (newsId) => {
        try {
            await app.delete("/news/delete/", {
                params: {
                    news_id: newsId,
                },
            });
            toast.success("Ваша новость успешно удалена!");
            getUserNews();
        } catch (error) {
            console.error(error);
        }
    };

    const [currentPage, setCurrentPage] = useState(0);
    const newsPerPage = 12;
    const indexOfLastNews = (currentPage + 1) * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = userNews.slice(indexOfFirstNews, indexOfLastNews);

    const nextPage = () => {
        if (indexOfLastNews < userNews.length) {
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
            {userNews.length > 0 ? (
                <div className="2xl:container 2xl:mx-auto xl:mx-32">
                    <div className="grid grid-cols-4 grid-rows-3 gap-8 py-10">
                        {currentNews.map((news, index) => (
                            <div key={index}>
                                <div className="flex flex-col justify-between gap-4 p-3 shadow rounded-xl items-center w-full h-full">
                                    <Link
                                        className="flex flex-col gap-3"
                                        to={`/news/${news.post_id}`}
                                    >
                                        <img
                                            className="min-w-full aspect-video object-cover rounded-xl"
                                            src={news.title_img}
                                            alt="popular"
                                        />
                                        <h5 className="line-clamp-1 self-start px-3">
                                            {news.theme}
                                        </h5>
                                        <Markdown className="markdown line-clamp-2 px-3">
                                            {news.text}
                                        </Markdown>
                                    </Link>
                                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl px-3 py-[22px] w-full">
                                        <div className="flex flex-col flex-1 gap-1">
                                            <p>{news.created_at_date}</p>
                                        </div>
                                        <div
                                            className="pr-2 red-hover cursor-pointer"
                                            onClick={() =>
                                                handleDelete(news.post_id)
                                            }
                                        >
                                            <svg
                                                width="19"
                                                height="24"
                                                viewBox="0 0 42 48"
                                                fill="#3E3232"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                                                    fillOpacity={0.4}
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
                            disabled={indexOfLastNews >= userNews.length}
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
                    <h1 className="text-3xl text-primary75 font-bold p-10 mt-32 mb-44">
                        Создайте новость для отображения публикации!
                    </h1>
                </div>
            )}
        </>
    );
}

export default UserNews;
