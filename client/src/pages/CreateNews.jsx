import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import app from "../utils/axiosConfig";
import toast from "react-hot-toast";
import ProfileBar from "../components/ProfileBar";
const MarkdownEditor = lazy(() => import("../components/MarkdownEditor"));

function CreateNews() {
    const { isUser } = useOutletContext();
    const [errors, setErrors] = useState({});
    const [text, setText] = useState("");
    const [tags, setTags] = useState("");
    const [theme, setName] = useState("");
    const [file, setFile] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Политика");
    const navigate = useNavigate();

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDelete = () => {
        setFile(null);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        const errors = {};
        if (!file) {
            errors.file = "Пожалуйста, выберите изображение";
        } else if (!file.type.includes("image")) {
            errors.file = "Пожалуйста, выберите корректный формат изображения";
        } else if (file.size > 10 * 1024 * 1024) {
            errors.file = "Размер изображения не должен превышать 10 МБ";
        }
        if (!text) {
            errors.text = "Пожалуйста, введите текст";
        }
        if (!theme) {
            errors.theme = "Пожалуйста, введите тему";
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        toast.promise(
            new Promise((resolve, reject) => {
                const uploadData = async () => {
                    try {
                        const data = new FormData();
                        data.append("image", file, {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        });
                        const res = await app.post("/news/upload-image", data);
                        setTimeout(() => {
                            handleAddPost(res.data.secure_url);
                            resolve("Новость успешно опубликована!");
                        }, 500);
                    } catch (error) {
                        console.log(error.message);
                        reject(new Error("Загрузка не удалась"));
                    }
                };
                uploadData();
            }),
            {
                loading: "Публикация новости...",
                success: (result) => result,
                error: (error) => error.message,
            }
        );
    };

    const handleAddPost = async (secure_url) => {
        try {
            await app
                .post("/news/create-news", {
                    theme,
                    text,
                    tags,
                    category: selectedCategory,
                    title_img: secure_url,
                    user_id: isUser.id,
                })
                .then(() => {
                    setTimeout(() => navigate("/feed"), 1000);
                });
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    useEffect(() => {}, [errors]);

    return (
        <>
            <ProfileBar />
            <div className="2xl:mx-auto 2xl:container xl:mx-32">
                <form
                    onSubmit={handleUpload}
                    className="flex flex-col mt-8 gap-4"
                    encType="multipart/form-data"
                >
                    <div className="flex justify-between gap-8 my-4">
                        <div className="basis-1/3 flex flex-col gap-4">
                            <div className="flex flex-1 flex-col gap-4">
                                <h5>Заголовок новости</h5>
                                <textarea
                                    type="text"
                                    value={theme}
                                    rows={10}
                                    className="flex-1"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.theme && (
                                    <h4 className="text-primary75">
                                        {errors.theme}
                                    </h4>
                                )}
                            </div>
                            <div className="flex flex-col gap-4">
                                <h5>Категория</h5>
                                <select
                                    className="bg-gray rounded-xl p-3 font-[Roboto]"
                                    name="category"
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                    defaultValue="Политика"
                                >
                                    <option value="Политика">Политика</option>
                                    <option value="Спорт">Спорт</option>
                                    <option value="Медицина">Медицина</option>
                                    <option value="Экономика">Экономика</option>
                                    <option value="Животные">Животные</option>
                                    <option value="Путешествия">
                                        Путешествия
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div
                            className="basis-2/3 flex flex-col col-start-3 row-start-1 row-span-2 col-span-3 gap-4"
                            onDrop={(e) => handleDrop(e)}
                            onDragOver={(e) => handleDragOver(e)}
                        >
                            <h5>Титульное изображение</h5>
                            {file ? (
                                <div className="relative">
                                    <img
                                        className="rounded-xl aspect-video object-cover"
                                        src={URL.createObjectURL(file)}
                                        alt="uploadedImage"
                                    />
                                    <button 
                                        className="absolute  top-[8px] left-[8px] bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl"
                                        onClick={() => handleDelete()}>
                                        Удалить изображение
                                    </button>
                                </div>
                            ) : (
                                <label htmlFor="file" style={{ cursor: "pointer" }} className="w-full h-full flex items-center justify-center">
                                    <div className="bg-gray rounded-xl w-full h-full flex flex-col justify-center items-center align-middle">
                                        <svg className="h-20 w-20 stroke-primary75 opacity-60" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h5 className="opacity-75"><b className="transition duration-150 delay-150 hover:delay-150 hover:text-primary75">Выберите изображение</b> или перетащите его сюда</h5>
                                    </div>
                                    <input
                                        id="file"
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </label>
                            )}
                            {errors.file && (
                                <h4 className="text-primary75">
                                    {errors.file}
                                </h4>
                            )}
                        </div>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <MarkdownEditor
                            className="w-full bg-gray"
                            editorText={text}
                            setEditorText={setText}
                        />
                    </Suspense>
                    {errors.text && (
                        <h4 className="text-primary75">{errors.text}</h4>
                    )}
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="flex flex-col gap-4 w-[80%] h-full">
                            <h5>Тэги</h5>
                            <textarea
                                name="tags"
                                rows="1"
                                placeholder="Введите тэги для оптимизации поиска"
                                onChange={(e) => setTags(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="self-end bg-primary75 opacity-75 hover:opacity-100 text-white py-3.5 px-12 rounded-xl w-[17%] h-full"
                        >
                            Опубликовать
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateNews;
