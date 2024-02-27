import app from '../utils/axiosConfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

function Banner() {

    const [recentPosts, setRecentPosts] = useState([]);

    const getRecentPosts = async () => {
        try {
          const response = await app.get('http://localhost:3033/news/recent-posts');
          setRecentPosts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
    useEffect(() => {
      getRecentPosts();
    }, []);

  return (
    <section className='container flex gap-6 justify-between mx-auto my-12 banner'>
        <Link to={`/news/${recentPosts[0]?.post_id}`} className="banner-1 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src={ recentPosts[0]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[0]?.theme }</h3>
                <Markdown className="markdown pt-3 line-clamp-2">{ recentPosts[0]?.text }</Markdown>
            </div>
        </Link>
        <Link to={`/news/${recentPosts[1]?.post_id}`} className="banner-2 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src={ recentPosts[1]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[1]?.theme }</h3>
                <Markdown className="markdown pt-3 line-clamp-2">{ recentPosts[1]?.text }</Markdown>
            </div>
        </Link>
        <Link to={`/news/${recentPosts[2]?.post_id}`} className="banner-3 relative">
            <img className="w-full h-[452px] object-cover rounded-xl" src={ recentPosts[2]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[724px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[2]?.theme }</h3>
                <Markdown className="markdown pt-3 line-clamp-2">{ recentPosts[2]?.text }</Markdown>
            </div>
        </Link>
    </section>
  )
}

export default Banner