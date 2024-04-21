import app from "../utils/axiosConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import { LoaderBanner } from "./Loader";

function Banner() {
    const [recentNews, setRecentNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
                try {
                    const response = await app.get("/news/recent-news");
                    setRecentNews(response.data);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
        };

        const handleScrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        
        handleScrollToTop();
        getNews();
    }, []);

    return (
        <>
        { isLoading ? 
            <div className="2xl:mx-auto xl:mx-32 mt-12 mb-8">
                <LoaderBanner />
            </div>
            :
            <section className="2xl:container grid grid-cols-4 grid-rows-1 gap-4 justify-between 2xl:mx-auto xl:mx-32 mt-12 mb-8">
                <Link
                    to={`/news/${recentNews[0]?.post_id}`}
                    className="relative"
                >
                    <img
                        className="h-full w-full object-cover rounded-xl"
                        src={recentNews[0]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute xl:top-[192px] 2xl:top-[320px] bg-gray m-2.5 p-2.5 rounded-xl w-full h-full xl:max-w-[260px] xl:max-h-[110px] 2xl:max-w-[350px] 2xl:max-h-[110px]">
                        <h3 className="line-clamp-1">{recentNews[0]?.theme}</h3>
                        <Markdown className="markdown pt-3 line-clamp-2">
                            {recentNews[0]?.text}
                        </Markdown>
                    </div>
                </Link>
                <Link
                    to={`/news/${recentNews[1]?.post_id}`}
                    className="relative"
                >
                    <img
                        className="h-full w-full object-cover rounded-xl"
                        src={recentNews[1]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute xl:top-[192px] 2xl:top-[320px] bg-gray m-2.5 p-2.5 rounded-xl w-full h-full xl:max-w-[260px] xl:max-h-[110px] 2xl:max-w-[350px] 2xl:max-h-[110px]">
                        <h3 className="line-clamp-1">{recentNews[1]?.theme}</h3>
                        <Markdown className="markdown pt-3 line-clamp-2">
                            {recentNews[1]?.text}
                        </Markdown>
                    </div>
                </Link>
                <Link
                    to={`/news/${recentNews[2]?.post_id}`}
                    className="col-span-2 relative"
                >
                    <img
                        className="2xl:h-[452px] object-cover rounded-xl"
                        src={recentNews[2]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute xl:top-[192px] 2xl:top-[320px] bg-gray m-2.5 p-2.5 rounded-xl w-full h-full xl:max-w-[554px] xl:max-h-[110px] 2xl:max-w-[738px] 2xl:max-h-[110px]">
                        <h3 className="line-clamp-1">{recentNews[2]?.theme}</h3>
                        <Markdown className="markdown pt-3 line-clamp-2">
                            {recentNews[2]?.text}
                        </Markdown>
                    </div>
                </Link>
            </section>
        }
        </>
    );
}

export default Banner;
