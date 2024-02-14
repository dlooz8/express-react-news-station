import { useState } from 'react';
import app from '../utils/axiosConfig';
import { useNavigate, useOutletContext } from "react-router-dom";


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [ isAuth, setIsAuth] = useOutletContext();

  const handleAuthorization = async (e) => {
    console.log("SIGN IN");
    e.preventDefault();
    await app.post('http://localhost:3033/auth/login', {
        email: email,
        password: password,
      })
      .then(function () {
        setIsAuth(true);
        navigate('/feed');
      })
      .catch(function (error) {
        console.log(error, "Is Auth" + isAuth);
      });
  };

  return (
    <div className="flex justify-center">
      <h2>Sign In</h2>
      <form onSubmit={handleAuthorization} >
        <input type="text" placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Ваш пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;