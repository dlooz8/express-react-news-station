import axios from 'axios';
import { useEffect, useState } from 'react';



function SignIn() {

  const [news, setNews] = useState([]);

  const test = async () => {
    try {
      const response = await axios.get('http://localhost:3033/api/signin');
      setNews(response.data.users);
      console.log(news);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    test();
  }, []);


  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <ul>
        { news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SignIn;