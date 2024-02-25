import app from "../utils/axiosConfig";
import { useEffect, useState } from 'react';

function Post() {
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            const postId = window.location.pathname.split('/').pop();
            const response = await app.get(`http://localhost:3033/news/${postId}`);
            setPost(response.data[0]);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="container mx-auto">
            <h1>{post.theme}</h1>
            <p>{post.text}</p>
            <p>{post.user_id}</p>
            <p>{post.created_at}</p>
        </div>
    )
}

export default Post