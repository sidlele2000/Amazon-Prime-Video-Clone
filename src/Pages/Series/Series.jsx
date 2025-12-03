import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EmblaCarousel from "../../Components/Carousel/Carousel";
import { fetchPopularTV, LatestTV, TopTV, TrendingTV } from "../../app/api";
import PopularCard from "../../Components/PopularCard/PopularCard";
import TrendingCard from "../../Components/TrendingCard/TrendingCard";
import TopCard from "../../Components/TopCard/TopCard";
import { InView } from "react-intersection-observer";
import MovieModal from "../../Components/MovieModal/MovieModal";
import Loader from "../../Components/Loader/Loader";
import "./Series.css";

function Series() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [top, setTop] = useState([]);
  const [loadStage, setLoadStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (series) => {
    setSelectedSeries(series);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    async function loadFirst() {
      const [popular, trending] = await Promise.all([
        fetchPopularTV(),
        TrendingTV(),
      ]);
      setPopular(popular);
      setTrending(trending);
    }
    loadFirst();
  }, []);

  const loadNext = async () => {
    setLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 2000));
    const [topSeries] = await Promise.all([
      TopTV()
    ]);
    setTop(topSeries);
    setLoading(false);
    setLoadStage(2);
  };

  return (
    <>
      <EmblaCarousel options={{ loop: true }} items={trending} />

      <div className="container">

        <Typography sx={{fontSize:25, color:"white",fontWeight:600,mt:2,mb:2}}>Popular Series</Typography>
        <PopularCard items={popular} onCardClick={openModal} />

        <Typography sx={{fontSize:25,color:"white",fontWeight:600,mt:2,mb:2}}>Trending Series</Typography>
        <TrendingCard items={trending} onCardClick={openModal} />

        <InView
          as="div"
          onChange={(inView) => inView && loadNext()}
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
            <Typography sx={{fontSize:25,fontWeight:600,color:"white",mt:2,mb:2}}>Top Rated Series</Typography>
            <TopCard items={top} onCardClick={openModal} />
          </>
        )}

      </div>

      {selectedSeries && (
        <MovieModal open={modalOpen} item={selectedSeries} close={closeModal} />
      )}
    </>
  );
}

export default Series;
