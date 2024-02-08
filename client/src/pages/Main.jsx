// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';
import Banner from '../components/Banner.jsx';
import PopularPosts from '../components/PopularPosts.jsx';
import NewPosts from '../components/NewPosts.jsx';
import HotSport from '../components/HotSport.jsx';
import TrendyPosts from '../components/TrendyPosts.jsx';
import Weather from '../components/Weather.jsx';
import Footer from '../components/Footer.jsx';

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
      <Banner />
      <PopularPosts />
      <HotSport />
      <NewPosts />
      <Weather />
      <TrendyPosts />
      <Footer />
    </div>
  );
}

export default Main;