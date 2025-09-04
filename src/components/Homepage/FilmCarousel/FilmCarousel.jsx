import React, { useState, useRef, useEffect, useCallback } from "react";
import "./FilmCarousel.css";
import FilmOverview from "../FilmOverview/FilmOverview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FilmCarousel = ({
  title,
  carouselSection,
  films,
  page,
  showDetails = false,
}) => {
  const [hoveredFilm, setHoveredFilm] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [adjustedPosition, setAdjustedPosition] = useState({ x: 0, y: 0 });
  const [tooltipPlacement, setTooltipPlacement] = useState("right");
  const tooltipRef = useRef(null);
  const [tooltipSize, setTooltipSize] = useState({ width: 300, height: 200 });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSlidesPerView = 5;

      if (width < 480) {
        newSlidesPerView = carouselSection === "continues-film" ? 1.2 : 2.5;
      } else if (width < 768) {
        newSlidesPerView = carouselSection === "continues-film" ? 1.5 : 3.5;
      } else if (width < 1024) {
        newSlidesPerView = 4;
      }

      setSlidesPerView(newSlidesPerView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [carouselSection]);

  useEffect(() => {
    if (tooltipRef.current && hoveredFilm) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();
      setTooltipSize({ width, height });
    }
  }, [hoveredFilm]);

  const adjustTooltipPosition = useCallback(
    (x, y) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const padding = 15;

      let adjustedX = x;
      let adjustedY = y;
      let placement = "right";

      // Adjust horizontal position
      if (x + tooltipSize.width > viewportWidth - padding) {
        adjustedX = x - tooltipSize.width - 30;
        placement = "left";
      } else {
        adjustedX = x + 15;
      }

      adjustedX = Math.max(
        padding,
        Math.min(adjustedX, viewportWidth - tooltipSize.width - padding)
      );

      // Adjust vertical position
      if (y + tooltipSize.height > viewportHeight - padding) {
        adjustedY = viewportHeight - tooltipSize.height - padding;
      }

      adjustedY = Math.max(padding, adjustedY);

      return { x: Math.round(adjustedX), y: Math.round(adjustedY), placement };
    },
    [tooltipSize]
  );

  useEffect(() => {
    if (hoveredFilm) {
      const adjustedPos = adjustTooltipPosition(
        cursorPosition.x,
        cursorPosition.y - 100
      );
      setAdjustedPosition(adjustedPos);
      setTooltipPlacement(adjustedPos.placement);
    }
  }, [hoveredFilm, cursorPosition, adjustTooltipPosition]);

  useEffect(() => {
    if (!hoveredFilm) return;

    const handlePositionUpdate = () => {
      const adjustedPos = adjustTooltipPosition(
        cursorPosition.x,
        cursorPosition.y - 100
      );
      setAdjustedPosition(adjustedPos);
      setTooltipPlacement(adjustedPos.placement);
    };

    window.addEventListener("resize", handlePositionUpdate);
    window.addEventListener("scroll", handlePositionUpdate, true);

    return () => {
      window.removeEventListener("resize", handlePositionUpdate);
      window.removeEventListener("scroll", handlePositionUpdate, true);
    };
  }, [hoveredFilm, cursorPosition, adjustTooltipPosition]);

  // Event handlers
  const handleMouseEnter = (film, e) => {
    if (isTouchDevice) return;
    setHoveredFilm(film);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setHoveredFilm(null);
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (film, e) => {
    if (!isTouchDevice) return;
    const touch = e.touches[0];
    setHoveredFilm(film);
    setCursorPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!isTouchDevice) return;
    setHoveredFilm(null);
  };

  const renderFilmTags = (film) => {
    if (page === "film") {
      if (carouselSection === "premium-film") {
        return <p className="premium-tag">Premium</p>;
      } else if(carouselSection === "trending-film") {
        return <p className="top-tag">
                Top <br />
                10
              </p>  ;
      } else {
        return (
          <>
            {film.newEpisodeTag && (
              <p className="new-episode-tag">Episode Baru</p>
            )}
            {film.topFilmTag && (
              <p className="top-tag">
                Top <br />
                10
              </p>
            )}
          </>
        );
      }
    } if (page === "series") {
      if (carouselSection === "premium-film") {
        return <p className="premium-tag">Premium</p>;
      } else if (carouselSection === "trending-film") {
        return (
          <p className="top-tag">
            Top <br />
            10
          </p>
        );
      } else {
        return (
          <>
            {film.newEpisodeTag && (
              <p className="new-episode-tag">Episode Baru</p>
            )}
            {film.topFilmTag && (
              <p className="top-tag">
                Top <br />
                10
              </p>
            )}
          </>
        );
      }
    } else if (page === "home") {
      if (carouselSection === "trending-film") {
        return (
          <p className="top-tag">
            Top <br />
            10
          </p>
        );
      } else {
        return (
          <>
            {film.newEpisodeTag && (
              <p className="new-episode-tag">Episode Baru</p>
            )}
            {film.topFilmTag && (
              <p className="top-tag">
                Top <br />
                10
              </p>
            )}
          </>
        );
      }
    }
    return null;
  };

  return (
    <>
      <div className={carouselSection}>
        <div className="film-carousel">
          <h1>{title}</h1>
          <div className="film-container">
            <Swiper
              loop={true}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              spaceBetween={16}
              slidesPerView={slidesPerView}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="swiper-container"
            >
              {films.map((film) => (
                <SwiperSlide key={film.id}>
                  <div
                    className="film-cover"
                    onMouseEnter={(e) => handleMouseEnter(film, e)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onTouchStart={(e) => handleTouchStart(film, e)}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    style={{ backgroundImage: `url(${film.image})` }}
                  >
                    {renderFilmTags(film)}
                    {showDetails && (
                      <div className="film-detail">
                        <h3>{film.title}</h3>
                        <p>
                          <i className="fas fa-star icon-star"></i>
                          {film.rating}
                        </p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div ref={navigationPrevRef} className="button-prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div ref={navigationNextRef} className="button-next">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      {hoveredFilm && !isTouchDevice && (
        <div
          ref={tooltipRef}
          className={`film-overview-tooltip tooltip-${tooltipPlacement}`}
          style={{
            position: "fixed",
            left: adjustedPosition.x,
            top: adjustedPosition.y,
            zIndex: 1000,
          }}
        >
          <FilmOverview film={hoveredFilm} carouselSection={carouselSection} />
        </div>
      )}
    </>
  );
};

export default FilmCarousel;
