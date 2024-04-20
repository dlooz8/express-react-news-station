import Carousel from '../components/Carousel.jsx';
import Banner from '../components/Banner.jsx';
import PopularNews from '../components/PopularNews.jsx';
import LatestNews from '../components/LatestNews.jsx';
import HotSport from '../components/HotSport.jsx';
import TrendyNews from '../components/TrendyNews.jsx';

function Main() {

  return (
    <div>
      <Carousel />
      <Banner />
      <PopularNews />
      <HotSport />
      <LatestNews />
      <TrendyNews />
    </div>
  );
}

export default Main;