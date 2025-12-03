import Slider from "react-slick";
import PrimeCard from "../PrimeCard/PrimeCard";
import "../Cards/Cards.css";

function PopularCard({ items, onCardClick }) {
  const settings = {   // slick slider settings
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <div className="card-section-wrapper">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {items?.map((movie) => (
            <div key={movie.id} className="slick-card-wrapper">
              <PrimeCard 
                item={movie}
                onClick={() => onCardClick(movie)}
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default PopularCard;
