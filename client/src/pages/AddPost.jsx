import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function AddPost() {

    const [theme, setName] = useState('');
    const [category, setCategory] = useState('');
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
                <h4>Введите ваши данные для регистрации</h4>
                <Link to='/signin'><h5 className="hover:text-primary75">Авторизоваться</h5></Link>
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
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    
                </div>
                <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 my-16 rounded-xl">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default AddPost