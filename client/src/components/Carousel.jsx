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
        <div className="container mx-auto bg-gray rounded-xl px-8 pb-1 pt-3  ">
            <Slider {...settings}>
                <div className="carousel-category-card">
                    <Link to="/food">
                        <h5>#Food</h5>
                        <img src="food-s.jpg" alt="food" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/animals">
                        <h5>#Animal</h5>
                        <img src="animal-s.jpg" alt="animal" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/cars">
                        <h5>#Car</h5>
                        <img src="car-s.jpg" alt="car" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/sport">
                        <h5>#Sport</h5>
                        <img src="sport-s.jpg" alt="sport" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/music">
                        <h5>#Music</h5>
                        <img src="music-s.jpg" alt="music" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/tech">
                        <h5>#Tech</h5>
                        <img src="tech-s.jpg" alt="tech" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/abstract">
                        <h5>#Abstract</h5>
                        <img src="abstract-s.jpg" alt="abstract" />
                    </Link>
                </div>
                <div className="carousel-category-card">
                    <Link to="/friends">
                        <h5>#Friends</h5>
                        <img src="friends-s.jpg" alt="friends" />
                    </Link>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;