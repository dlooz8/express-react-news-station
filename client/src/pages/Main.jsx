import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Main() {
  const [news, setNews] = useState([]);

  const test = async () => {
    try {
      const response = await axios.get('http://localhost:3033/api');
      setNews(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <h2>News List</h2>
    </div>
  );
}

export default Main;