import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import MarkdownEditor from '../components/MarkdownEditor';
import app from '../utils/axiosConfig';
import toast from 'react-hot-toast';
import ProfileBar from "../components/ProfileBar";


function CreateNews() {

    const { isUser } = useOutletContext();
    const [theme, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleAddPost = async (e) => {
        e.preventDefault();
        const imgData = new FormData();
        imgData.append('image', image);
        try {
            await app.post('/news/create-news', {
                theme,
                text,
                category,
                title_img: imgData,
                user_id: isUser.id
            }).then(() => {
                toast.success('Новость успешно добавлена!');
                setTimeout(() => navigate('/feed'), 1000);
            })
        }
        catch (error) {
            toast.error(error.response.data);
        }
    }

    return (
        <>
            <ProfileBar />
            <div className='2xl:mx-48 mx-32'>
                <form onSubmit={handleAddPost} className='flex flex-col my-8 gap-12'>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className="input col-start-1">
                            <h5>Заголовок новости</h5>
                            <input type="text" value={theme} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input col-start-1">
                            <h5>Категория</h5>
                            <select className='bg-gray rounded-xl p-3 font-[Roboto]' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Политика">Политика</option>
                                <option value="Спорт">Спорт</option>
                                <option value="Медицина">Медицина</option>
                                <option value="Экономика">Экономика</option>
                                <option value="Животные">Животные</option>
                                <option value="Путешествия">Путешествия</option>
                            </select>
                        </div>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                    </div>
                    <MarkdownEditor className="w-full bg-gray" editorText={text} setEditorText={setText} />
                    <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl">Опубликовать</button>
                </form>
            </div>
        </>
    )
}

export default CreateNews