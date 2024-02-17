import { useNavigate, Link, useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function AddPost() {

    const { isUser } = useOutletContext();
    const [theme, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleAddPost = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="2xl:mx-48 mx-32">
            <div className='flex flex-col px-4 pt-4 bg-gray rounded-xl'>
                <img className="w-full h-full object-cover rounded-xl" src="header_user.jpg" alt="img" />
                <div className="flex justify-between py-8">
                <h4>{isUser.name}</h4>
                </div>
            </div>
            <div className='flex flex-col my-8'>
                <form onSubmit={handleAddPost}>
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
                <textarea className='flex w-full bg-gray mt-8' cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}>
                </textarea>
                <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 my-16 rounded-xl">Опубликовать</button>
                </form>
            </div>
        </div>
    );
}

export default AddPost