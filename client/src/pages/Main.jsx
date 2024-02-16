import Carousel from '../components/Carousel.jsx';
import Banner from '../components/Banner.jsx';
import PopularPosts from '../components/PopularPosts.jsx';
import NewPosts from '../components/NewPosts.jsx';
import HotSport from '../components/HotSport.jsx';
import TrendyPosts from '../components/TrendyPosts.jsx';
import Weather from '../components/Weather.jsx';

function Main() {

  return (
    <div>
      <Carousel />
      <Banner />
      <PopularPosts />
      <HotSport />
      <NewPosts />
      <Weather />
      <TrendyPosts />
    </div>
  );
}

export default Main;