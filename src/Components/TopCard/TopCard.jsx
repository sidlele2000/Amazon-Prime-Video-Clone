import PrimeCard from "../PrimeCard/PrimeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Cards/Cards.css";

function TopCard({ items, onCardClick }) {
  const settings = {  //slick slider settings
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Slider {...settings}>
      {items?.map((movie) => (
        <PrimeCard
          key={movie.id}
          item={movie}
          onClick={() => onCardClick(movie)}
        />
      ))}
    </Slider>
  );
}

export default TopCard;
