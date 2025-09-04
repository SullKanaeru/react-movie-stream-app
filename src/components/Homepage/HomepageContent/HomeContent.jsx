import FilmCarousel from "../FilmCarousel/FilmCarousel";
import HeroContainer from "../HeroContainer/HeroContainer";

const HomeContent = ({ filmsData }) => {
  const { continuesFilms, topRatingFilms, trendingFilms, newReleaseFilms } = filmsData;
  return (
    <>
      <HeroContainer page="home" />
      <FilmCarousel
        title="Melanjutkan Tonton Film"
        carouselSection="continues-film"
        films={continuesFilms}
        page="home"
      />
      <FilmCarousel
        title="Top Rating Film dan Series Hari Ini"
        carouselSection="top-rating-film"
        films={topRatingFilms}
        page="home"
      />
      <FilmCarousel
        title="Film Trending"
        carouselSection="trending-film"
        films={trendingFilms}
        page="home"
      />
      <FilmCarousel
        title="Rilis Baru"
        carouselSection="new-release-film"
        films={newReleaseFilms}
        page="home"
      />
    </>
  );
};

export default HomeContent;
