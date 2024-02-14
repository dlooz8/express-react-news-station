import { useState } from 'react';
import app from '../utils/axiosConfig';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuthorization = async (e) => {
    console.log("SIGN IN");
    e.preventDefault();
    await app.post('http://localhost:3033/auth/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        checkAuth();
        navigate('/feed');
        return <Navbar isUserAuth={true} />;
      })
      .catch(function (error) {
        console.log(error);
        navigate('/signin');
      });
  };

  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
      console.log("FETCHING check auth");
      await app.get('http://localhost:3033/auth/check-auth')
        .then((response) => {
          setIsAuth(response.data.authenticated);
          console.log(isAuth);
        })
        .catch((error) => {
          console.log(error);

        })
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