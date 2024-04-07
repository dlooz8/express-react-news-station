import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import app from "../utils/axiosConfig";
import { LoaderPopularNews } from "../components/Loader";
import Markdown from "react-markdown";
import AddBookmark from "../utils/AddBookmark";



function SearchNews() {

    const [query, setQuery] = useState(window.location.pathname.split("/").pop());
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
    const { isUser } = useOutletContext();

    useEffect(() => {
        setQuery(window.location.pathname.split("/").pop());
        const getNews = async () => {
            try {
                const response = await app.get('/news/search-news', {
                    params: {
                        search: query
                    }
                });
                setNews(response.data);
            } catch (error) {
                console.error(error.response.data);
            } finally {
                setIsLoading(false);
          }
      }
    
      getNews();
      console.log(news);
    }, [window.location.pathname]);

    const [currentPage, setCurrentPage] = useState(0);
    const newsPerPage = 12;
    const indexOfLastNews = (currentPage + 1) * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const nextPage = () => {
        if (indexOfLastNews < news.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                <svg
                    width="4"
                    height="11"
                    viewBox="0 0 4 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="0.5" width="4" height="10" rx="2" fill="#F81539" />
                </svg>
                <h4>Поиск по запросу: {decodeURI(window.location.pathname.split("/").pop())}</h4>
                </div>
            </div>
            { isLoading ? (
                <LoaderPopularNews />
            ) : (
            <div className="grid grid-cols-4 gap-3">
                {currentNews.map((news, index) => (
                    <div
                        className="flex flex-col justify-between p-3 shadow rounded-xl items-center w-[270px] 2xl:w-[360px] h-[340px] 2xl:h-[390px]" key={index}>
                        <Link
                            to={`/news/${news.post_id}`}
                            className="flex flex-col gap-2"
                        >
                            <img
                                className="min-w-full max-h-[206px] object-cover rounded-xl"
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
                        <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 w-full">
                            <img
                                src={news.avatar_url}
                                alt="avatar"
                                className="w-[44px] h-[44px] object-cover rounded-xl"
                            />
                            <div className="flex flex-col flex-1 gap-1">
                                <h6>{news.author}</h6>
                                <p>{news.created_at_date}</p>
                            </div>
                            <div
                                className="red-hover pr-2"
                                onClick={() =>
                                    AddBookmark(news.post_id, isUser.id)
                                }
                            >
                                <svg
                                    width="16"
                                    height="21"
                                    viewBox="0 0 16 21"
                                    fill="#3E3232"
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
                ))}
            </div>
            )}
            <div className="flex justify-between gap-4">
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
                        disabled={indexOfLastNews >= news.length}
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
    )
}

export default SearchNews