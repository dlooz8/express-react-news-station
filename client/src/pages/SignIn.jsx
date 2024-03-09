import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { useState } from 'react';
import toast from 'react-hot-toast';
import app from '../utils/axiosConfig';

function SignIn() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();
  const { isUser, setIsUser } = useOutletContext();

  const handleAuthorization = async (e) => {
    e.preventDefault();
    await app.post('/auth/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success('Вы вошли в аккаунт');
        navigate('/feed');
      })
      .catch(function (error) {
        toast.error(error.response.data);
      });
  };

  return (
    <div className="container mx-auto">
      <div className='flex flex-col px-4 pt-4 bg-gray rounded-xl'>
        <img className="w-full h-full object-cover rounded-xl" src="header_user.jpg" alt="img" />
        <div className="flex justify-between py-8">
          <h4>Добро пожаловать!</h4>
          <Link to='/registration'><h5 className="hover:text-primary75">Зарегистрироваться</h5></Link>
        </div>
      </div>
      <div className='flex flex-col my-8'>
        <form onSubmit={handleAuthorization}>
          <div className='grid grid-cols-2 gap-12'>
            <div className="input">
              <h5>Ваш email</h5>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
              <h5>Ваш пароль</h5>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 my-16 rounded-xl">Авторизоваться</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;