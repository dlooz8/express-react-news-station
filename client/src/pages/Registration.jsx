import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from 'react';
import app from '../utils/axiosConfig';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');
  const [ isAuth, setIsAuth ] = useOutletContext();
  const navigate = useNavigate();


  const handleRegistration = async (e) => {
    e.preventDefault();
    await app.post('http://localhost:3033/auth/register', {
        name: name,
        email: email,
        password: password,
        avatar_url: avatar_url
      })
      .then(() => {
        setIsAuth(true);
        setTimeout(() => navigate('/feed'), 3000);
      })
      .catch((error) => {
        console.log(error, isAuth);
        console.log(error.response.data);
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleRegistration} className='flex flex-col gap-4 p-4 bg-gray '>
        <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Ваш пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Ссылка на вашу аватарку" value={avatar_url} onChange={(e) => setAvatarUrl(e.target.value)} />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;