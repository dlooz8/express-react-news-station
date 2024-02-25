import app from '../utils/axiosConfig';
import { useEffect, useState } from 'react';

function Banner() {

    const [recentPosts, setRecentPosts] = useState([]);

    const getRecentPosts = async () => {
        try {
          const response = await app.get('http://localhost:3033/feed/recent-posts');
          setRecentPosts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
    useEffect(() => {
      getRecentPosts();
    }, []);

  return (
    <section className='flex gap-6 justify-between mx-32 2xl:mx-48 my-12 banner'>
        <div className="banner-1 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src={ recentPosts[0]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[0]?.theme }</h3>
                <p className="pt-3 line-clamp-2">{ recentPosts[0]?.text }</p>
            </div>
        </div>
        <div className="banner-2 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src={ recentPosts[1]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[1]?.theme }</h3>
                <p className="pt-3 line-clamp-2">{ recentPosts[1]?.text }</p>
            </div>
        </div>
        <div className="banner-3 relative">
            <img className="w-[744px] h-[452px] object-cover rounded-xl" src={ recentPosts[2]?.title_img } alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[724px] max-h-[117px]">
                <h3 className="line-clamp-1">{ recentPosts[2]?.theme }</h3>
                <p className="pt-3 line-clamp-2">{ recentPosts[2]?.text }</p>
            </div>
        </div>
    </section>
  )
}

export default Banner