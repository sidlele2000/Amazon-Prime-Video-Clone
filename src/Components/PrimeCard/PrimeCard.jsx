import { useState } from "react";
import "./PrimeCard.css";

function PrimeCard({ item, onClick }) {
  const [hover, setHover] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  const title = item.title || item.name;
  const year =
    item.release_date?.substring(0, 4) ||
    item.first_air_date?.substring(0, 4) ||
    "";
  const rating = item.vote_average?.toFixed(1);
  const overview = item.overview || "";

  return (
    <div
      className="prime_card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className={
          hover ? "prime_card_image prime_card_image_hovered" : "prime_card_image"
        }
      />
      {hover && (
        <div className="prime_hover_container">
          <div className="prime_title">{title.length > 50
            ? title.substring(0, 50) + "..." : title}</div>

          <div>
            <button className="prime_play_button">Play</button>
          </div>

          <div className="prime_rating">
            {year} • IMDb {rating}
          </div>

          <div className="prime_membership">Watch with Prime</div>
          <div className="prime_overview">
            {overview.length > 120
              ? overview.substring(0, 120) + "..."
              : overview}
          </div>
        </div>
      )}
    </div>
  );
}

export default PrimeCard;
