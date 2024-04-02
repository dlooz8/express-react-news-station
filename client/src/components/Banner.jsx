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

        getNews();
    }, []);

    return (
        <>
        { isLoading ? 
            <div className="container mx-auto mt-12 mb-8">
                <LoaderBanner />
            </div>
            :
            <section className="container flex gap-6 justify-between mx-auto mt-12 mb-8 banner">
                <Link
                    to={`/news/${recentNews[0]?.post_id}`}
                    className="banner-1 relative"
                >
                    <img
                        className="w-[360px] h-[452px] object-cover rounded-xl"
                        src={recentNews[0]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                        <h3 className="line-clamp-1">{recentNews[0]?.theme}</h3>
                        <Markdown className="markdown pt-3 line-clamp-2">
                            {recentNews[0]?.text}
                        </Markdown>
                    </div>
                </Link>
                <Link
                    to={`/news/${recentNews[1]?.post_id}`}
                    className="banner-2 relative"
                >
                    <img
                        className="w-[360px] h-[452px] object-cover rounded-xl"
                        src={recentNews[1]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                        <h3 className="line-clamp-1">{recentNews[1]?.theme}</h3>
                        <Markdown className="markdown pt-3 line-clamp-2">
                            {recentNews[1]?.text}
                        </Markdown>
                    </div>
                </Link>
                <Link
                    to={`/news/${recentNews[2]?.post_id}`}
                    className="banner-3 relative"
                >
                    <img
                        className="w-full h-[452px] object-cover rounded-xl"
                        src={recentNews[2]?.title_img}
                        alt="img"
                    />
                    <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[724px] max-h-[117px]">
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
