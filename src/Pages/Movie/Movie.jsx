import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EmblaCarousel from "../../Components/Carousel/Carousel";
import { InView } from "react-intersection-observer";
import PopularCard from "../../Components/PopularCard/PopularCard";
import TrendingCard from "../../Components/TrendingCard/TrendingCard";
import LatestCard from "../../Components/LatestCard/LatestCard";
import TopCard from "../../Components/TopCard/TopCard";
import MovieModal from "../../Components/MovieModal/MovieModal";
import Loader from "../../Components/Loader/Loader";

import { fetchTrendingMovies, fetchPopularMovies, TopMovies, LatestMovie, } from "../../app/api";
import "./Movie.css";

function Movie() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [latest, setLatest] = useState([]);
  const [top, setTop] = useState([]);
  const [loadStage, setLoadStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    async function showFirst() {
      const [popular, trending] = await Promise.all([
        fetchPopularMovies(),
        fetchTrendingMovies(),
      ]);

      setPopular(popular);
      setTrending(trending);
    }
    showFirst();
  }, []);


  const showNext = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const [latestMovies, topMovies] = await Promise.all([
      LatestMovie(),
      TopMovies()
    ]);

    setLatest(latestMovies);
    setTop(topMovies);

    setLoading(false);
    setLoadStage(2);
  };

  return (
    <>
      <EmblaCarousel options={{ loop: true }} items={trending} />
      <div className="container">

        <Typography sx={{ fontSize: 25, color: "white", fontWeight: 600, mt: 2, mb: 2 }}>Popular Movies</Typography>
        <PopularCard items={popular} onCardClick={openModal} />

        <Typography sx={{ fontSize: 25, color: "white", fontWeight: 600, mt: 2, mb: 2 }}>Trending Movies</Typography>
        <TrendingCard items={trending} onCardClick={openModal} />

        <InView
          as="div"
          onChange={(inView) => inView && showNext()}
          triggerOnce={true}
        >
          {({ ref }) => (
            <div ref={ref}>
              {loading && <Loader />}
            </div>
          )}
        </InView>

        {loadStage >= 2 && (
          <>
            <Typography sx={{ fontSize: 25, fontWeight: 600, color: "white", mt: 2, mb: 2 }}>Latest Movies</Typography>
            <LatestCard items={latest} onCardClick={openModal} />

            <Typography sx={{ fontSize: 25, fontWeight: 600, color: "white", mt: 2, mb: 2 }}>Top Rated Movies</Typography>
            <TopCard items={top} onCardClick={openModal} />
          </>
        )}

      </div>

      {selectedMovie && (
        <MovieModal open={modalOpen} item={selectedMovie} close={closeModal} />
      )}
    </>
  );
}

export default Movie;
