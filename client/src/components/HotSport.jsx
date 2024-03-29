import app from "../utils/axiosConfig";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

function HotSport() {

    const [hotSportPosts, setHotSportPosts] = useState([]);

    const getHotSportPosts = async () => {
        try {
            const response = await app.get('/news/hot-sport-news');
            setHotSportPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };
  
    useEffect(() => {
        getHotSportPosts();
    }, []);

    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [leftAnimate, setLeftAnimate] = useState(false);
    const [animate, setAnimate] = useState(true);
    const postsPerPage = 3;
    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = hotSportPosts.slice(indexOfFirstPost, indexOfLastPost);
    
    const nextPage = () => {
        if (indexOfLastPost < hotSportPosts.length) {
            setLeftAnimate(false);
            setTimeout(() => setCurrentPage(currentPage + 1),300);
            setAnimate(false);            
            setTimeout(() => setAnimate(true), 300);
        }
    };
    
    const prevPage = () => {
        if (currentPage > 0) {
            setLeftAnimate(true);
            setTimeout(() => setCurrentPage(currentPage - 1),300);
            setAnimate(false);
            setTimeout(() => setAnimate(true), 300);
        }
    };


    return (
        <div className="bg-gray">
            <section className="mt-16 pt-4 pb-16 container mx-auto">
                <div className="flex justify-between py-6">
                    <div className="flex gap-2 justify-between items-center">
                        <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                        </svg>
                        <h4>Hot Sport</h4>
                    </div>
                    <div className="flex justify-between gap-4">
                        <button onClick={prevPage} disabled={currentPage === 0} className="w-[40px] h-[40px] bg-[#e2e2e2] rounded-xl flex items-center justify-center red-hover">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 18C13.7188 18 13.4688 17.9062 13.2812 17.7188L8.28125 12.7188C7.875 12.3438 7.875 11.6875 8.28125 11.3125L13.2812 6.3125C13.6562 5.90625 14.3125 5.90625 14.6875 6.3125C15.0938 6.6875 15.0938 7.34375 14.6875 7.71875L10.4062 12L14.6875 16.3125C15.0938 16.6875 15.0938 17.3438 14.6875 17.7188C14.5 17.9062 14.25 18 14 18Z" fillOpacity="0.5"/>
                            </svg>
                        </button>
                        <button onClick={nextPage} disabled={indexOfLastPost >= hotSportPosts.length} className="w-[40px] h-[40px] bg-[#e2e2e2] rounded-xl flex items-center justify-center red-hover">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: animate ? 0 : 1, x: animate ? (leftAnimate ? -30 : 30) : 0 }}
                    animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : (leftAnimate ? 30 : -30) }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3 }}
                    className="sport-tri gap-6">

                    <Link to={`/news/${currentPosts[0]?.post_id}`} className="sport-tri1 relative shadow rounded-xl">
                        <img className="object-cover rounded-xl h-full aspect-video" src={ currentPosts[0]?.title_img } alt="img" />
                        <div className="absolute top-[70%] m-3 glass rounded-xl">
                            <h4 className="line-clamp-1 mx-3 my-4">{ currentPosts[0]?.theme }</h4>
                            <Markdown className="markdown line-clamp-2 mx-3 my-4">{ currentPosts[0]?.text }</Markdown>
                        </div>
                    </Link>

                    <Link to={`/news/${currentPosts[1]?.post_id}`} className="flex justify-between sport-tri2 shadow rounded-xl">
                        <img className="m-3 object-cover rounded-xl max-h-[200px] aspect-video" src={ currentPosts[1]?.title_img } alt="img" />
                        <div>
                            <h5 className="line-clamp-1 self-start mx-3 my-5">{ currentPosts[1]?.theme }</h5>
                            <Markdown className="markdown xl:line-clamp-6 mx-3">{ currentPosts[1]?.text }</Markdown>
                        </div>
                    </Link>
                    
                    <Link to={`/news/${currentPosts[2]?.post_id}`} className="flex justify-between sport-tri3 shadow rounded-xl">
                        <img className="m-3 object-cover rounded-xl max-h-[200px] aspect-video" src={ currentPosts[2]?.title_img } alt="img" />
                        <div>
                            <h5 className="line-clamp-1 self-start mx-3 my-5">{ currentPosts[2]?.theme }</h5>
                            <Markdown className="markdown xl:line-clamp-6 mx-3">{ currentPosts[2]?.text }</Markdown>
                        </div>
                    </Link>     

                </motion.div>
            </section>
        </div>
    )
}

export default HotSport