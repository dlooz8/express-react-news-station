import { useNavigate, useOutletContext, Link } from "react-router-dom";
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
    <div className="2xl:mx-48 mx-32">
      <div className='flex flex-col px-4 pt-4 bg-gray rounded-xl'>
        <img className="w-full h-full object-cover rounded-xl" src="header_user.jpg" alt="img" />
        <div className="flex justify-between py-8">
          <h4>Введите ваши данные для регистрации</h4>
          <Link to='/signin'><h5 className="hover:text-primary75">Авторизоваться</h5></Link>
        </div>
      </div>
      <div className='flex flex-col my-8'>
        <form onSubmit={handleRegistration}>
          <div className='grid grid-cols-2 gap-12'>
            <div className="input">
              <h5>Ваше имя</h5>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
              <h5>Ваш email</h5>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <h5>Ваш пароль</h5>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input">
              <h5>Ссылка на вашу аватарку</h5>
              <input type="text" value={avatar_url} onChange={(e) => setAvatarUrl(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 my-16 rounded-xl">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;