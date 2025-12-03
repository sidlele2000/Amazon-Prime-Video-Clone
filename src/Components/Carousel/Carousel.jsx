import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Carousel.css";
import Autoplay from 'embla-carousel-autoplay'
import { Typography } from "@mui/material";

const imageurl = "https://image.tmdb.org/t/p/original";

const EmblaCarousel = ({ options, items = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options,[Autoplay({ delay: 3000 })]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <div className="embla__slide" key={item.id}>
              <img
                className="embla__slide__img"
                src={
                  imageurl + item.backdrop_path
                }
                alt={item.title || item.name}
              />

              <div className="embla__overlay">
                <h1>{item.title || item.name}</h1>
                <div className="embla__buttons__overlay">
                  <button className="watch-now-btn"><PlayArrowIcon sx={{ fontSize: 25, alignItems: "center" }} /> Watch Now</button>
                </div>
                <Typography sx={{ color: "#1976d2", mt: 2, fontWeight: 700, fontSize: 22 }}>Included with Prime</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          ‹
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          ›
        </button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
