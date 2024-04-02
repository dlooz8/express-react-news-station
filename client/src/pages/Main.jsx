import Carousel from '../components/Carousel.jsx';
import Banner from '../components/Banner.jsx';
import PopularNews from '../components/PopularNews.jsx';
import LatestNews from '../components/LatestNews.jsx';
import HotSport from '../components/HotSport.jsx';
import TrendyNews from '../components/TrendyNews.jsx';
import Weather from '../components/Weather.jsx';

function Main() {

  return (
    <div>
      <Carousel />
      <Banner />
      <PopularNews />
      <HotSport />
      <LatestNews />
      <Weather />
      <TrendyNews />
    </div>
  );
}

export default Main;