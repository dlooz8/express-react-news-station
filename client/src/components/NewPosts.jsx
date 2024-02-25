import app from "../utils/axiosConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewPosts() {

    const [newPosts, setNewPosts] = useState([]);

    const getNewPosts = async() => {
        try {
            const response = await app.get('http://localhost:3033/news/new-posts');
            setNewPosts(response.data);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getNewPosts();
    }, []);

    return (
        <section className="container mx-auto my-12">
            <div className="flex justify-between py-8">
                <div className="flex gap-2 justify-between items-center">
                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                    </svg>
                    <h4>New Posts</h4>
                </div>
                <div className="flex justify-between items-center px-5 py-2 bg-gray rounded-xl red-hover">
                    <p className="font-medium">Show All</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z" fillOpacity={0.75}/>
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-2 justify-stretch gap-6 grid-rows-3">
                {newPosts.map((post, index) => (
                    <Link to={`/news/${post.post_id}`} key={index} className="flex gap-2 shadow rounded-xl">
                        <img className="xl:w-[300px] 2xl:w-[340px] h-[190px] m-3 object-cover rounded-xl aspect-video" src={ post.title_img } alt="new-post-img" />
                        <div className="flex flex-col justify-between py-2 xl:mr-2">
                            <h5 className="line-clamp-1 pt-3">{ post.theme }</h5>
                            <p className="line-clamp-2">{ post.text }</p>
                            <div className="flex items-center justify-between gap-4 bg-gray rounded-xl mr- p-2">
                                <img src={ post.avatar_url} alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl aspect-square" />
                                <div className="flex flex-1 flex-col gap-1">
                                    <h6>{ post.author }</h6>
                                    <p>{ post.created_at_date }</p>
                                </div>
                                <div className="red-hover pr-3">
                                    <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>  
                ))}
            </div>

        </section>
    );
}

export default NewPosts;