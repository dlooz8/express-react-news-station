import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import MarkdownEditor from '../components/MarkdownEditor';
import app from '../utils/axiosConfig';
import toast from 'react-hot-toast';
import ProfileBar from "../components/ProfileBar";

function CreateNews() {

    const { isUser } = useOutletContext();
    const [text, setText] = useState('');
    const [theme, setName] = useState('');
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('Политика');

    const navigate = useNavigate();

    const handleUpload = (e) => {
        e.preventDefault();
      
        toast.promise(
            new Promise((resolve, reject) => {
                const uploadData = async () => {
                try {
                    const data = new FormData();
                    data.append("my_file", file);
                    const res = await app.post("/news/upload", data);
                    setTimeout(() => {
                    handleAddPost(res.data.secure_url);
                    resolve('Новость успешно опубликована!');
                    }, 500);
                } catch (error) {
                    console.log(error.message);
                    reject(new Error('Загрузка не удалась'));
                }
                };
                uploadData();
            }),
            {
                loading: 'Публикация новости...',
                success: (result) => result,
                error: (error) => error.message,
            }
        );
    };

    const handleAddPost = async (secure_url) => {
        try {
          await app.post('/news/create-news', {
              theme,
              text,
              category,
              title_img: secure_url,
              user_id: isUser.id
          }).then(() => {
              setTimeout(() => navigate('/feed'), 1000);
          });
        } catch (error) {
          toast.error(error.response.data);
        }
    };

    return (
        <>
            <ProfileBar />
            <div className='2xl:mx-48 mx-32'>
                <form onSubmit={handleUpload} className='flex flex-col my-8 gap-12'>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className="input col-start-1">
                            <h5>Заголовок новости</h5>
                            <input type="text" value={theme} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input col-start-1">
                            <h5>Категория</h5>
                            <select className='bg-gray rounded-xl p-3 font-[Roboto]' name='category' value={category} onChange={(e) => setCategory(e.target.value)} defaultValue="Политика">
                                <option value="Политика">Политика</option>
                                <option value="Спорт">Спорт</option>
                                <option value="Медицина">Медицина</option>
                                <option value="Экономика">Экономика</option>
                                <option value="Животные">Животные</option>
                                <option value="Путешествия">Путешествия</option>
                            </select>
                        </div>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <MarkdownEditor className="w-full bg-gray" editorText={text} setEditorText={setText} />
                    <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl">Опубликовать</button>
                </form>
            </div>
        </>
    )
}

export default CreateNews