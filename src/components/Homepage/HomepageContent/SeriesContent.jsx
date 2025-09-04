import FilmCarousel from "../FilmCarousel/FilmCarousel";
import HeroContainer from "../HeroContainer/HeroContainer";

const SeriesContent = ({ filmsData }) => {
  const { continuesFilms, topRatingFilms, trendingFilms, newReleaseFilms } =
    filmsData;

  return (
    <>
      <HeroContainer page="series" />
      <FilmCarousel
        title="Melanjutkan Tonton Film"
        carouselSection="continues-film"
        films={continuesFilms}
        page="film"
      />
      <FilmCarousel
        title="Film Persembahan Chill"
        carouselSection="premium-film"
        films={continuesFilms}
        page="film"
      />
      <FilmCarousel
        title="Top Rating Film Hari Ini"
        carouselSection="top-rating-film"
        films={topRatingFilms}
        page="film"
      />
      <FilmCarousel
        title="Film Trending"
        carouselSection="trending-film"
        films={trendingFilms}
        page="film"
      />
      <FilmCarousel
        title="Rilis Baru"
        carouselSection="new-release-film"
        films={newReleaseFilms}
        page="film"
      />
    </>
  );
};

export default SeriesContent;
