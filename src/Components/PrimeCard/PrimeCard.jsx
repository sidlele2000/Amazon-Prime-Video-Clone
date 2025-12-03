import { useState } from "react";
import './PrimeCard.css'
import { Typography } from "@mui/material";

function PrimeCard({ item,onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageurl = "https://image.tmdb.org/t/p/original";
  const imageSrc = imageurl + item.poster_path;
  const title = item.title || item.name;
  const year = item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || "N/A";
  const rating = item.vote_average;
  const overview = item.overview;

  return (
    <div
      className="prime-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className={`prime-card-display ${isHovered ? "hovered" : ""}`}
      />

      {isHovered && (
        <div className="prime-card-hover">
          <img src={imageSrc} alt={title} className="prime-card-hover-img" />
          <div className="prime-card-hover-content">
            <Typography sx={{fontSize:25,fontWeight:600}}>{title}</Typography>
            <div className="hover-buttons">
              <button className="hover-play-btn">Play</button>
            </div>
            <Typography>
              {year} • Rating: {rating}
              </Typography>
            <Typography>Watch with Prime membership</Typography>
            <Typography>
              {overview.length > 120 ? overview.slice(0, 120) + "..." : overview}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrimeCard;
