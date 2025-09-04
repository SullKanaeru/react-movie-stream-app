import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import HomeContent from "./HomepageContent/HomeContent";
import Footer from "./Footer/Footer";
import DaftarSayaContent from "./HomepageContent/DaftarSayaContent";
import "./Homepage.css";
import FilmContent from "./HomepageContent/FilmContent";
import SeriesContent from "./HomepageContent/SeriesContent";

const Homepage = () => {
  class FilmRepository {
    constructor(films) {
      this.films = films;
    }

    getFilmByTitle(title) {
      const film = this.films.find((film) => film.title === title);
      return film || null;
    }
  }

    const films = [
      {
        id: 1,
        category: "movie",
        title: "Don't Look Up",
        rating: "4.5/5",
        image: "/images/film1-continues.png",
        age: "13+",
        duration: "2j 33m",
        genre: ["Comedy", "Drama", "Sci-Fi"],
        alreadyWatched: true,
        topFilm: false,
        trendingFilm: false,
        newRelease: false,
        myCollection: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: true,
      },
      {
        id: 2,
        category: "series",
        title: "Blue Lock",
        rating: "4.6/5",
        image: "/images/film3-continues.png",
        age: "13+",
        duration: "24m per episode",
        episodes: 24,
        genre: ["Animation", "Sport", "Drama"],
        alreadyWatched: true,
        topFilm: false,
        trendingFilm: false,
        newRelease: false,
        myCollection: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: true,
      },
      {
        id: 3,
        category: "movie",
        title: "The Batman",
        rating: "4.2/5",
        image: "/images/film2-continues.png",
        age: "13+",
        duration: "2j 56m",
        genre: ["Action", "Crime", "Drama"],
        alreadyWatched: true,
        topFilm: false,
        trendingFilm: false,
        newRelease: false,
        myCollection: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 4,
        category: "movie",
        title: "A Man Called Otto",
        rating: "4.4/5",
        image: "/images/film4-continues.png",
        age: "13+",
        duration: "2j 6m",
        genre: ["Comedy", "Drama"],
        alreadyWatched: true,
        topFilm: false,
        trendingFilm: false,
        newRelease: false,
        myCollection: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: true,
      },
      {
        id: 5,
        category: "movie",
        title: "Suzume",
        rating: "4.7/5",
        image: "/images/film1-top-rating.png",
        age: "PG",
        duration: "2j 2m",
        genre: ["Animation", "Adventure", "Drama"],
        alreadyWatched: true,
        topFilm: true,
        trendingFilm: false,
        newRelease: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 6,
        category: "movie",
        title: "Jurassic World: Dominion",
        rating: "4.1/5",
        image: "/images/film2-top-rating.png",
        age: "13+",
        duration: "2j 27m",
        genre: ["Action", "Adventure", "Sci-Fi"],
        alreadyWatched: true,
        topFilm: true,
        trendingFilm: false,
        newRelease: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 7,
        category: "movie",
        title: "Sonic the Hedgehog 2",
        rating: "4.3/5",
        image: "/images/film3-top-rating.png",
        age: "PG",
        duration: "2j 2m",
        genre: ["Action", "Adventure", "Comedy"],
        alreadyWatched: false,
        topFilm: true,
        trendingFilm: false,
        newRelease: false,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 8,
        category: "series",
        title: "All of Us Are Dead",
        rating: "4.5/5",
        image: "/images/film4-top-rating.png",
        age: "18+",
        duration: "50-70m per episode",
        episodes: 12,
        genre: ["Horror", "Drama", "Thriller"],
        alreadyWatched: false,
        topFilm: true,
        trendingFilm: false,
        newRelease: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 9,
        category: "movie",
        title: "Big Hero 6",
        rating: "4.8/5",
        image: "/images/film5-top-rating.png",
        age: "PG",
        duration: "1j 42m",
        genre: ["Animation", "Action", "Adventure"],
        alreadyWatched: false,
        topFilm: true,
        trendingFilm: false,
        newRelease: true,
        newEpisodeTag: true,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 10,
        category: "movie",
        title: "The Tomorrow War",
        rating: "4.0/5",
        image: "/images/film1-trending.png",
        age: "13+",
        duration: "2j 20m",
        genre: ["Action", "Adventure", "Sci-Fi"],
        alreadyWatched: false,
        topFilm: true,
        trendingFilm: true,
        newRelease: false,
        newEpisodeTag: false,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 11,
        category: "movie",
        title: "Ant-Man and the Wasp: Quantumania",
        rating: "4.2/5",
        image: "/images/film2-trending.png",
        age: "13+",
        duration: "2j 5m",
        genre: ["Action", "Adventure", "Comedy"],
        alreadyWatched: false,
        topFilm: false,
        trendingFilm: true,
        newRelease: true,
        newEpisodeTag: false,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 12,
        category: "movie",
        title: "Guardians of the Galaxy Vol. 3",
        rating: "4.6/5",
        image: "/images/film3-trending.png",
        age: "13+",
        duration: "2j 30m",
        genre: ["Action", "Adventure", "Comedy"],
        alreadyWatched: false,
        topFilm: false,
        trendingFilm: true,
        newRelease: false,
        newEpisodeTag: false,
        topFilmTag: true,
        premiumTag: false,
      },
      {
        id: 13,
        category: "movie",
        title: "The Little Mermaid",
        rating: "4.3/5",
        image: "/images/film5-trending.png",
        age: "PG",
        duration: "2j 15m",
        genre: ["Adventure", "Family", "Fantasy"],
        alreadyWatched: false,
        topFilm: false,
        trendingFilm: true,
        newRelease: true,
        newEpisodeTag: false,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 14,
        category: "series",
        title: "Duty After School",
        rating: "4.4/5",
        image: "/images/film2-release.png",
        age: "16+",
        duration: "45-60m per episode",
        episodes: 6,
        genre: ["Action", "Drama", "Sci-Fi"],
        alreadyWatched: false,
        topFilm: false,
        trendingFilm: true,
        newRelease: false,
        newEpisodeTag: false,
        topFilmTag: false,
        premiumTag: false,
      },
      {
        id: 15,
        category: "series",
        title: "Missing",
        rating: "4.1/5",
        image: "/images/film5-release.png",
        age: "16+",
        duration: "45m per episode",
        episodes: 8,
        genre: ["Mystery", "Thriller", "Drama"],
        alreadyWatched: false,
        topFilm: false,
        trendingFilm: true,
        newRelease: false,
        newEpisodeTag: true,
        topFilmTag: true,
        premiumTag: false,
      },
    ];

  const [homeContent, setHomeContent] = useState([]);
  const [page, setPage] = useState(
    () => localStorage.getItem("page") || "home"
  );

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <>
            <HomeContent
              filmsData={{
                continuesFilms,
                topRatingFilms,
                trendingFilms,
                newReleaseFilms,
              }}
            />
          </>
        );
      case "daftar-saya":
        return (
          <>
            <DaftarSayaContent filmsData={films} />
          </>
        );
      case "film":
        return (
          <>
            <FilmContent
              filmsData={{
                continuesFilms,
                topRatingFilms,
                trendingFilms,
                newReleaseFilms,
              }}
            />
          </>
        )
      case "series":
        return (
          <>
            <SeriesContent
              filmsData={{
                continuesFilms,
                topRatingFilms,
                trendingFilms,
                newReleaseFilms,
              }}
            />
          </>
        )
      default:
        return null;
    }
  };



  const filmDisplay = new FilmRepository(films);

  // Data untuk carousel
  const continuesFilms = films.filter((film) => film.alreadyWatched);

  const topRatingFilms = films.filter((film) => film.topFilm);

  const trendingFilms = films.filter((film) => film.trendingFilm);

  const newReleaseFilms = films.filter((film) => film.newRelease);

  return (
    <>
      <Navbar setPage={setPage} />
      {renderContent()}
      <Footer />
    </>
  );
};

export default Homepage;
