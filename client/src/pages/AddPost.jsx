import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import app from '../utils/axiosConfig';
import toast from 'react-hot-toast';

function AddPost() {

    const { isUser } = useOutletContext();
    const [theme, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleAddPost = async (e) => {
        e.preventDefault();
        try {
            await app.post('http://localhost:3033/news/postnews', {
                theme,
                text,
                category,
                title_img: imageUrl,
                user_id: isUser.id
            }).then(() => {
                toast.success('Новость успешно добавлена!');
                setTimeout(() => navigate('/feed'), 1000);
            })
        }
        catch (error) {
            toast.error(error.response.data);
            console.error(error);
            console.log(theme, text, category, imageUrl, isUser.id);
        }
    }

    return (
        <div className="2xl:mx-48 mx-32">
            <div className='flex flex-col px-4 pt-4 bg-gray rounded-xl'>
                <img className="w-full h-full object-cover rounded-xl" src="header_user.jpg" alt="img" />
                <div className="flex justify-between py-8">
                <h4>{isUser.name}</h4>
                </div>
            </div>
            <form onSubmit={handleAddPost} className='flex flex-col my-8 gap-12'>
                <div className='grid grid-cols-2 gap-12'>
                    <div className="input">
                        <h5>Заголовок новости</h5>
                        <input type="text" value={theme} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input">
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
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Ссылка на изображение" />
                </div>
                <MarkdownEditor className="w-full bg-gray" editorText={text} setEditorText={setText} />
                <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl">Опубликовать</button>
            </form>
        </div>
    );
}

export default AddPost