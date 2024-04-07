import app from "../utils/axiosConfig";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from 'react-hot-toast';

function News() {
    const [post, setPost] = useState({});
    const [topPosts, setNewPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const { isUser } = useOutletContext();
    const navigate = useNavigate();

    const handleDeleteComment = async (commentId) => {
        try {
            await app.delete('/comments/delete-comment/', {
                params: {
                    id: commentId
                }
            });
            setComments(comments.filter((comment) => comment.id !== commentId));
            toast.success("Комментарий был удален");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteNestedComment = async (commentId, parentId) => {
        try {
            await app.delete(`/comments/delete-nestedcomment/`, {
                params: {
                    id: commentId
                }
            });
            setComments(comments.map((comment) => {
                if (comment.id === parentId) {
                    return {
                        ...comment,
                        nestedComments: comment.nestedComments.filter((nestedComment) => nestedComment.id !== commentId)
                    };
                }
                return comment;
            }));
            toast.success("Комментарий был удален");
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        const getPost = async () => {
            try {
            const postId = window.location.pathname.split("/").pop();
            const response = await app.get('/news/', {
                params: {
                news_id: postId
                }
            });
            setPost(response.data[0]);
            } catch (error) {
            console.error(error.response.data);
            navigate("/feed");
            }
        };
    
        const getComments = async () => {
            try {
            const postId = window.location.pathname.split("/").pop();
            const response = await app.get('/comments/', {
                params: {
                post_id: postId
                }
            });
            setComments(response.data);
            } catch (error) {
            console.error(error.response.data);
            }
        };
    
        const getNewPosts = async () => {
            try {
            const response = await app.get("/news/latest-news");
            setNewPosts(response.data);
            } catch (error) {
            console.error(error);
            }
        };
        getPost();
        getNewPosts();
        getComments();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="flex gap-6 justify-between">
                <div className="flex flex-col justify-start gap-6 w-[70%]">
                <div className="flex flex-col justify-between p-4 gap-4 bg-gray rounded-[20px]">
                    <h1>{post?.theme}</h1>
                    <img
                    src={post?.title_img}
                    alt="img"
                    className="max-h-[580px] w-full object-cover rounded-[20px]"
                    />
                    <div className="flex justify-center gap-16">
                    <div className="flex justify-center gap-2 items-center">
                        <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.53125 2.5H8.46875V1.40625C8.46875 1.05078 8.74219 0.75 9.125 0.75C9.48047 0.75 9.78125 1.05078 9.78125 1.40625V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3.21875V1.40625C3.21875 1.05078 3.49219 0.75 3.875 0.75C4.23047 0.75 4.53125 1.05078 4.53125 1.40625V2.5ZM1.6875 13C1.6875 13.2461 1.87891 13.4375 2.125 13.4375H10.875C11.0938 13.4375 11.3125 13.2461 11.3125 13V6H1.6875V13Z"
                            fill="#3E3232"
                            fillOpacity="0.5"
                        />
                        </svg>
                        <p>{post?.created_at_date}</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M4.4375 5.4375C4.90234 5.4375 5.28516 5.84766 5.28516 6.3125C5.28516 6.80469 4.90234 7.1875 4.4375 7.1875C3.94531 7.1875 3.5625 6.80469 3.5625 6.3125C3.5625 5.84766 3.94531 5.4375 4.4375 5.4375ZM7.5 5.4375C7.96484 5.4375 8.34766 5.84766 8.34766 6.3125C8.34766 6.75 7.9375 7.16016 7.5 7.16016C7.03516 7.16016 6.625 6.77734 6.625 6.3125C6.625 5.82031 7.00781 5.4375 7.5 5.4375ZM10.5625 5.4375C11.0273 5.4375 11.4375 5.84766 11.4102 6.3125C11.4102 6.80469 11.0273 7.1875 10.5625 7.1875C10.0977 7.1875 9.6875 6.80469 9.6875 6.3125C9.6875 5.84766 10.0703 5.4375 10.5625 5.4375ZM7.5 0.625C11.3555 0.625 14.4727 3.22266 14.4727 6.33984C14.4727 9.45703 11.3555 12 7.5 12C6.59766 12 5.72266 11.8633 4.95703 11.6172C4.13672 12.1914 2.82422 12.875 1.15625 12.875C0.882812 12.875 0.636719 12.7383 0.554688 12.4648C0.472656 12.2188 0.5 11.9453 0.691406 11.7539C0.691406 11.7539 1.53906 10.8242 1.94922 9.75781C1.04688 8.80078 0.5 7.59766 0.5 6.3125C0.5 3.16797 3.61719 0.625 7.5 0.625ZM7.5 10.6875C10.6172 10.6875 13.1328 8.74609 13.1328 6.3125C13.1328 3.90625 10.5898 1.9375 7.47266 1.9375C4.35547 1.9375 1.8125 3.90625 1.8125 6.3125C1.8125 7.48828 2.38672 8.36328 2.87891 8.88281L3.45312 9.48438L3.15234 10.25C3.01562 10.6328 2.82422 11.0156 2.60547 11.3438C3.26172 11.125 3.80859 10.8242 4.19141 10.5508L4.71094 10.168L5.33984 10.3594C6.02344 10.5781 6.76172 10.6875 7.5 10.6875Z"
                            fill="#3E3232"
                            fillOpacity="0.5"
                        />
                        </svg>
                        <p>Комментариев: COUNT OF COMMENTS</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12.7227 2.375C13.707 2.375 14.4727 3.16797 14.4727 4.125V11.125C14.4727 12.1094 13.6797 12.875 12.7227 12.875H2.22266C1.23828 12.875 0.472656 12.1094 0.472656 11.125V2.375C0.472656 1.41797 1.23828 0.625 2.22266 0.625H5.44922C5.91406 0.625 6.35156 0.816406 6.67969 1.14453L8.01953 2.375H12.7227ZM13.1602 11.125V4.125C13.1602 3.90625 12.9414 3.6875 12.7227 3.6875H7.47266L5.72266 2.07422C5.64062 1.99219 5.53125 1.9375 5.42188 1.9375H2.22266C1.97656 1.9375 1.78516 2.15625 1.78516 2.375V11.125C1.78516 11.3711 1.97656 11.5625 2.22266 11.5625H12.7227C12.9414 11.5625 13.1602 11.3711 13.1602 11.125Z"
                            fill="#3E3232"
                            fillOpacity="0.5"
                        />
                        </svg>
                        <p>Категория: {post?.category}</p>
                    </div>
                    </div>
                </div>
                <h5 className="p-4">
                    <Markdown>{post?.text}</Markdown>
                </h5>
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
                    <h4>Комментарии</h4>
                    </div>
                    { comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id}>
                                <div className="flex flex-col gap-4 bg-gray rounded-xl p-4">
                                    <div className="flex gap-4 justify-between">
                                        <img
                                            src={comment.user.avatar_url}
                                            alt="avatar"
                                            className="w-[60px] h-[60px] object-cover rounded-xl"
                                        />
                                        <div className="flex flex-1 flex-col justify-center gap-2">
                                            <h5>{comment.user.name}</h5>
                                            <div className="flex gap-2 items-center">
                                                <svg
                                                    width="14"
                                                    height="15"
                                                    viewBox="0 2 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.03125 2.5H8.96875V1.40625C8.96875 1.05078 9.24219 0.75 9.625 0.75C9.98047 0.75 10.2812 1.05078 10.2812 1.40625V2.5H11.375C12.332 2.5 13.125 3.29297 13.125 4.25V13C13.125 13.9844 12.332 14.75 11.375 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V4.25C0.875 3.29297 1.64062 2.5 2.625 2.5H3.71875V1.40625C3.71875 1.05078 3.99219 0.75 4.375 0.75C4.73047 0.75 5.03125 1.05078 5.03125 1.40625V2.5ZM2.1875 13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H11.375C11.5938 13.4375 11.8125 13.2461 11.8125 13V6H2.1875V13Z"
                                                        fill="#3E3232"
                                                        fillOpacity="0.5"
                                                    />
                                                </svg>
                                                <p>{comment.created_at_date}</p>
                                            </div>
                                        </div>
                                        { comment.user.id === isUser.id ? (
                                            <div onClick={() => handleDeleteComment(comment.id)} className="flex justify-between items-center self-center gap-2 px-4 py-2 h-full bg-[#e4e4e4] rounded-xl red-hover">
                                                <svg width="15" height="17" viewBox="0 0 42 48" fill="#3E3232" opacity={0.6} xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"/>
                                                </svg>
                                                <h5 className="opacity-80 cursor-default">Удалить</h5>
                                            </div>
                                        ) : (
                                            <div className="flex justify-between items-center self-center gap-2 px-4 py-2 h-full bg-[#e4e4e4] rounded-xl red-hover">
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.7539 5.95703L8.94141 10.0859C8.53125 10.4414 7.875 10.1406 7.875 9.59375V7.21484C3.60938 7.26953 1.80469 8.30859 3.03516 12.2734C3.17188 12.7109 2.625 13.0664 2.26953 12.793C1.06641 11.918 0 10.25 0 8.58203C0 4.42578 3.47266 3.52344 7.875 3.46875V1.30859C7.875 0.734375 8.53125 0.433594 8.94141 0.789062L13.7539 4.91797C14.0547 5.21875 14.0547 5.68359 13.7539 5.95703Z" fillOpacity="0.5"/>
                                                </svg>
                                                <h5 className="opacity-80 cursor-default">Ответить</h5>
                                            </div>
                                        )}
                                    </div>
                                    <p>{comment.text}</p>
                                </div>
                                { comment.nestedComments.length > 0 && (
                                    comment.nestedComments.map((nestedComment) => (
                                    <div key={nestedComment.id} className="flex flex-col gap-4 shadow rounded-xl p-4 mx-24 mt-4">
                                        <div className="flex gap-2">
                                            <img
                                                src={nestedComment.user.avatar_url}
                                                alt="avatar"
                                                className="w-[60px] h-[60px] object-cover rounded-xl"
                                            />
                                            <div className="flex flex-1 flex-col justify-center gap-2">
                                            <h5>{nestedComment.user.name}</h5>
                                            <div className="flex gap-2 items-center">
                                                <svg
                                                    width="14"
                                                    height="15"
                                                    viewBox="0 2 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.03125 2.5H8.96875V1.40625C8.96875 1.05078 9.24219 0.75 9.625 0.75C9.98047 0.75 10.2812 1.05078 10.2812 1.40625V2.5H11.375C12.332 2.5 13.125 3.29297 13.125 4.25V13C13.125 13.9844 12.332 14.75 11.375 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V4.25C0.875 3.29297 1.64062 2.5 2.625 2.5H3.71875V1.40625C3.71875 1.05078 3.99219 0.75 4.375 0.75C4.73047 0.75 5.03125 1.05078 5.03125 1.40625V2.5ZM2.1875 13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H11.375C11.5938 13.4375 11.8125 13.2461 11.8125 13V6H2.1875V13Z"
                                                        fill="#3E3232"
                                                        fillOpacity="0.5"
                                                    />
                                                </svg>
                                                <p>{nestedComment.created_at_date}</p>
                                            </div>
                                        </div>
                                            { nestedComment.user.id === isUser.id && (
                                                <div onClick={() => handleDeleteNestedComment(nestedComment.id, comment.id)} className="flex justify-between items-center self-center gap-2 px-4 py-2 h-full bg-[#e4e4e4] rounded-xl red-hover">
                                                    <svg width="15" height="17" viewBox="0 0 42 48" fill="#3E3232" opacity={0.6} xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"/>
                                                    </svg>
                                                    <h5 className="opacity-80 cursor-default">Удалить</h5>
                                                </div>
                                            )}
                                        </div>
                                        <p>{nestedComment.text}</p>
                                    </div>
                                    ))
                                )}
                            </div>
                        ))) : (
                            <p>Еще никто не оставлял комментариев</p>
                        )}
                </div>
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
                    <h4>Оставьте свой комментарий</h4>
                    </div>
                    <textarea className="bg-gray rounded-xl p-4" rows="4"></textarea>
                    <div className="flex items-center justify-center gap-2 bg-primary75 rounded-xl p-2 max-w-[240px]  ">
                    <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M4.9375 5.4375C5.40234 5.4375 5.78516 5.84766 5.78516 6.3125C5.78516 6.80469 5.40234 7.1875 4.9375 7.1875C4.44531 7.1875 4.0625 6.80469 4.0625 6.3125C4.0625 5.84766 4.44531 5.4375 4.9375 5.4375ZM8 5.4375C8.46484 5.4375 8.84766 5.84766 8.84766 6.3125C8.84766 6.75 8.4375 7.16016 8 7.16016C7.53516 7.16016 7.125 6.77734 7.125 6.3125C7.125 5.82031 7.50781 5.4375 8 5.4375ZM11.0625 5.4375C11.5273 5.4375 11.9375 5.84766 11.9102 6.3125C11.9102 6.80469 11.5273 7.1875 11.0625 7.1875C10.5977 7.1875 10.1875 6.80469 10.1875 6.3125C10.1875 5.84766 10.5703 5.4375 11.0625 5.4375ZM8 0.625C11.8555 0.625 14.9727 3.22266 14.9727 6.33984C14.9727 9.45703 11.8555 12 8 12C7.09766 12 6.22266 11.8633 5.45703 11.6172C4.63672 12.1914 3.32422 12.875 1.65625 12.875C1.38281 12.875 1.13672 12.7383 1.05469 12.4648C0.972656 12.2188 1 11.9453 1.19141 11.7539C1.19141 11.7539 2.03906 10.8242 2.44922 9.75781C1.54688 8.80078 1 7.59766 1 6.3125C1 3.16797 4.11719 0.625 8 0.625ZM8 10.6875C11.1172 10.6875 13.6328 8.74609 13.6328 6.3125C13.6328 3.90625 11.0898 1.9375 7.97266 1.9375C4.85547 1.9375 2.3125 3.90625 2.3125 6.3125C2.3125 7.48828 2.88672 8.36328 3.37891 8.88281L3.95312 9.48438L3.65234 10.25C3.51562 10.6328 3.32422 11.0156 3.10547 11.3438C3.76172 11.125 4.30859 10.8242 4.69141 10.5508L5.21094 10.168L5.83984 10.3594C6.52344 10.5781 7.26172 10.6875 8 10.6875Z"
                        fill="white"
                        />
                    </svg>
                    <p className="text-center text-white">Отправить комментарий</p>
                    </div>
                </div>
                </div>
                <div className="flex flex-col w-[30%] gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center gap-2 items-center bg-gray rounded-xl px-4 py-3">
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M14.6992 0.886719C14.918 1.02344 15.0273 1.26953 14.9453 1.51562L13.1953 13.3281C13.168 13.5195 13.0586 13.7109 12.8672 13.793C12.7852 13.8477 12.6758 13.9023 12.5664 13.9023C12.457 13.9023 12.375 13.875 12.293 13.8477L9.61328 12.6992L6.57812 14.668C6.46875 14.7227 6.33203 14.75 6.22266 14.75C6.14062 14.75 6.03125 14.7227 5.92188 14.6953C5.70312 14.5586 5.59375 14.3398 5.59375 14.0938V11.0039L1.38281 9.25391C1.16406 9.14453 1 8.92578 1 8.67969C0.972656 8.43359 1.10938 8.1875 1.32812 8.07812L14.0156 0.859375C14.2344 0.722656 14.5078 0.75 14.6992 0.886719ZM11.0898 4.03125L3.13281 8.54297L5.97656 9.74609L11.0898 4.03125ZM6.87891 12.8906L8.13672 12.0977L6.87891 11.5508V12.8906ZM12.0469 12.2891L13.3594 3.45703L7.23438 10.2656L12.0469 12.2891Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                        />
                    </svg>
                    <p>Поделиться</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center bg-gray rounded-xl px-4 py-3">
                    <svg
                        width="11"
                        height="15"
                        viewBox="0 0 11 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M9.4375 0.75C10.1484 0.75 10.75 1.35156 10.75 2.0625V13.875C10.75 14.5586 10.0117 14.9688 9.41016 14.6406L5.5 12.3438L1.5625 14.6406C0.960938 14.9688 0.25 14.5586 0.25 13.875V2.0625C0.25 1.35156 0.824219 0.75 1.5625 0.75H9.4375ZM9.4375 13.1094V2.22656C9.4375 2.14453 9.35547 2.0625 9.24609 2.0625H1.69922C1.61719 2.0625 1.5625 2.14453 1.5625 2.22656V13.1094L5.5 10.8125L9.4375 13.1094Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                        />
                    </svg>
                    <p>В закладки</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center bg-gray rounded-xl px-4 py-3">
                    <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M4.9375 5.4375C5.40234 5.4375 5.78516 5.84766 5.78516 6.3125C5.78516 6.80469 5.40234 7.1875 4.9375 7.1875C4.44531 7.1875 4.0625 6.80469 4.0625 6.3125C4.0625 5.84766 4.44531 5.4375 4.9375 5.4375ZM8 5.4375C8.46484 5.4375 8.84766 5.84766 8.84766 6.3125C8.84766 6.75 8.4375 7.16016 8 7.16016C7.53516 7.16016 7.125 6.77734 7.125 6.3125C7.125 5.82031 7.50781 5.4375 8 5.4375ZM11.0625 5.4375C11.5273 5.4375 11.9375 5.84766 11.9102 6.3125C11.9102 6.80469 11.5273 7.1875 11.0625 7.1875C10.5977 7.1875 10.1875 6.80469 10.1875 6.3125C10.1875 5.84766 10.5703 5.4375 11.0625 5.4375ZM8 0.625C11.8555 0.625 14.9727 3.22266 14.9727 6.33984C14.9727 9.45703 11.8555 12 8 12C7.09766 12 6.22266 11.8633 5.45703 11.6172C4.63672 12.1914 3.32422 12.875 1.65625 12.875C1.38281 12.875 1.13672 12.7383 1.05469 12.4648C0.972656 12.2188 1 11.9453 1.19141 11.7539C1.19141 11.7539 2.03906 10.8242 2.44922 9.75781C1.54688 8.80078 1 7.59766 1 6.3125C1 3.16797 4.11719 0.625 8 0.625ZM8 10.6875C11.1172 10.6875 13.6328 8.74609 13.6328 6.3125C13.6328 3.90625 11.0898 1.9375 7.97266 1.9375C4.85547 1.9375 2.3125 3.90625 2.3125 6.3125C2.3125 7.48828 2.88672 8.36328 3.37891 8.88281L3.95312 9.48438L3.65234 10.25C3.51562 10.6328 3.32422 11.0156 3.10547 11.3438C3.76172 11.125 4.30859 10.8242 4.69141 10.5508L5.21094 10.168L5.83984 10.3594C6.52344 10.5781 7.26172 10.6875 8 10.6875Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                        />
                    </svg>
                    <p>Комментарии</p>
                    </div>
                </div>
                <div className="flex items-center bg-gray p-4 rounded-xl gap-4">
                    <img
                    src={post.avatar_url}
                    alt="img"
                    className="w-[80px] h-[80px] rounded-xl object-cover"
                    />
                    <div className="flex flex-col items-center gap-3">
                    <h5>{post.author}</h5>
                    <div className="flex justify-start items-center gap-2 bg-primary75 px-4 py-3 rounded-xl">
                        <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M11.6875 5.75C11.6875 6.24219 11.2773 6.65234 10.8125 6.65234H6.875V10.5898C6.875 11.0547 6.46484 11.4375 6 11.4375C5.50781 11.4375 5.125 11.0547 5.125 10.5898V6.65234H1.1875C0.695312 6.65234 0.3125 6.24219 0.3125 5.75C0.3125 5.28516 0.695312 4.90234 1.1875 4.90234H5.125V0.964844C5.125 0.472656 5.50781 0.0625 6 0.0625C6.46484 0.0625 6.875 0.472656 6.875 0.964844V4.90234H10.8125C11.2773 4.875 11.6875 5.28516 11.6875 5.75Z"
                            fill="white"
                        />
                        </svg>
                        <p className="text-white">Подписаться</p>
                    </div>
                    </div>
                    <p className="flex-1 text-center">COUNT POSTS</p>
                </div>
                <div className="flex flex-col justify-between bg-gray p-4 rounded-xl gap-4">
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
                    <h4>Самые свежие новости</h4>
                    </div>
                    {topPosts.map((post) => (
                    <div key={post.post_id} className="flex items-center gap-4">
                        <img
                        src={post?.title_img}
                        alt=""
                        className="w-[80px] h-[80px] rounded-xl"
                        />
                        <div className="flex flex-col items-start gap-2">
                        <h5 className="line-clamp-2">{post?.theme}</h5>
                        <p>{post?.created_at_date}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <img
                    src="https://images.unsplash.com/photo-1627740660376-bc7506720b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="adv"
                    className="aspect-video w-full rounded-xl"
                />
                <img
                    src="https://images.unsplash.com/photo-1641650265007-b2db704cd9f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="adv"
                    className="aspect-video w-full rounded-xl"
                />
                </div>
            </div>
        </div>
    );
}

export default News;
