// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';


function Main() {
//   const [news, setNews] = useState([]);

//   const test = async () => {
//     try {
//       const response = await axios.get('http://localhost:3033/api');
//       setNews(response.data.users);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     test();
//   }, []);

  return (
    <div>
      <Carousel />


    </div>
  );
}

export default Main;