import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import ProfileBar from '../components/ProfileBar';
import Markdown from 'react-markdown';
import app from '../utils/axiosConfig';
import toast from 'react-hot-toast';

function UserNews() {
    
    const { isUser } = useOutletContext();
    const [userNews, setUserNews] = useState([]);

    const getUserNews = async () => {
        try {
            const response = await app.get('/news/user-news', {
                params: {
                    user_id: isUser.id
                }
            });
            setUserNews(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
    getUserNews();
    }, []);

    const handleDelete = async (newsId) => {
    toast((t) => (
        <span className="flex flex-col items-center p-3 gap-4">
            <h5>Удалить эту новость?</h5>
            <button className='flex justify-center items-center py-2 px-4 border-2 rounded-xl border-primary75'
                onClick={() => {
                toast.dismiss(t.id);
                confirmDelete(newsId);
            }}>
                <h5>
                    Удалить
                </h5>
            </button>
        </span>
    ));
    }

    const confirmDelete = async (newsId) => {
        try {
            await app.delete(`/news/delete/${newsId}`);
            toast.success('Ваша новость успешно удалена!');
            getUserNews();
        } catch (error) {
            console.error(error);
        }
    }

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 12;
    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userNews.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (indexOfLastPost < userNews.length) {
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
            <div className="2xl:mx-48 mx-32">
                <div className="grid grid-cols-4 grid-rows-3 gap-8 py-10">
                {currentPosts.map((news, index) => (
                <div key={index}>
                    <div className="flex flex-col justify-between p-3 shadow rounded-xl items-center w-[270px] 2xl:w-[360px] h-[340px] 2xl:h-[390px]">
                        <Link className="flex flex-col justify-between gap-2" to={`/news/${news.post.post_id}`}>
                            <img className="min-w-full max-h-[206px] object-cover rounded-xl" src={news.post.title_img} alt="popular" />
                            <h5 className="line-clamp-1 self-start px-3">{news.post.theme}</h5>
                            <Markdown className="markdown line-clamp-2 px-3">{news.post.text}</Markdown>
                        </Link>
                        <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 w-full">
                            <img src={news.avatar_url} alt="avatar" className="w-[44px] h-[44px] object-cover rounded-xl" />
                            <div className="flex flex-col flex-1 gap-1">
                                <h6>{news.author}</h6>
                                <p>{news.created_at_date}</p>
                            </div>
                            <div className="pr-2" onClick={() => handleDelete(news.id)}>
                                <svg width="19" height="24" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z" fill="#3E3232" fillOpacity={0.4}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
                <button onClick={prevPage}>Показать prev</button>
                <button onClick={nextPage}>Показать next</button>
            </div>
        </>

    );
}

export default UserNews