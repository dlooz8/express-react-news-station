import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import ProfileBar from '../components/ProfileBar';
import Markdown from 'react-markdown';
import app from '../utils/axiosConfig';
import toast from 'react-hot-toast';

function UserBookmarks() {
    
    const { isUser } = useOutletContext();
    const [userBookmarks, setUserBookmarks] = useState([]);

    const getUserBookmarks = async () => {
        try {
            const response = await app.get('/bookmarks/user-bookmarks', {
                params: {
                    user_id: isUser.id
                }
            });
            setUserBookmarks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
    getUserBookmarks();
    }, []);

    const handleDelete = async (bookmarkId) => {
    toast((t) => (
        <span className="flex flex-col items-center p-3 gap-4">
            <h5>Удалить эту новость из закладок?</h5>
            <button className='flex justify-center items-center py-2 px-4 border-2 rounded-xl border-primary75'
                onClick={() => {
                toast.dismiss(t.id);
                confirmDelete(bookmarkId);
            }}>
                <h5>
                    Удалить
                </h5>
            </button>
        </span>
    ));
    }

    const confirmDelete = async (bookmarkId) => {
    console.log("bookmarkId delete", bookmarkId);
    try {
        await app.delete(`/bookmarks/delete/${bookmarkId}`);
        toast.success('Закладка удалена');
        getUserBookmarks();
    } catch (error) {
        console.error(error);
    }
    }

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 12;
    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userBookmarks.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (indexOfLastPost < userBookmarks.length) {
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
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#F81539" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
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

export default UserBookmarks