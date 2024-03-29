import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className="container mx-auto  bg-gray rounded-xl px-8 pb-1.5 pt-3  ">
            <Slider {...settings}>
                <div className="carousel-category-card">
                    <Link to="/searchnews/food">
                        <h5 className="food-card">#Еда</h5>
                        <img src="food-s.jpg" alt="food" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/animal">
                        <h5 className="animal-card">#Животные</h5>
                        <img src="animal-s.jpg" alt="animal" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/cars">
                        <h5 className="car-card">#Автомобили</h5>
                        <img src="car-s.jpg" alt="car" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/sport">
                        <h5 className="sport-card">#Спорт</h5>
                        <img src="sport-s.jpg" alt="sport" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/music">
                        <h5 className="music-card">#Музыка</h5>
                        <img src="music-s.jpg" alt="music" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/tech">
                        <h5 className="tech-card">#Технологии</h5>
                        <img src="tech-s.jpg" alt="tech" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/abstract">
                        <h5 className="abstract-card">#Прочее</h5>
                        <img src="abstract-s.jpg" alt="abstract" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/searchnews/friends">
                        <h5 className="friends-card">#Общество</h5>
                        <img src="friends-s.jpg" alt="friends" />
                    </Link>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;