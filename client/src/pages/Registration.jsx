import { useNavigate, useOutletContext, Link } from "react-router-dom";
import app from '../utils/axiosConfig';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');
  const { setIsUser } = useOutletContext();
  const navigate = useNavigate();


  const handleRegistration = async (e) => {
    e.preventDefault();
    await app.post('http://localhost:3033/auth/register', {
        name: name,
        email: email,
        password: password,
        avatar_url: avatar_url
      })
      .then((res) => {
        setIsUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success('Вы успешно зарегистрировались!');
        setTimeout(() => navigate('/feed'), 1000);
      })
      .catch(() => {
        toast.error("Этот email уже зарегистрирован!");
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className="container mx-auto">
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