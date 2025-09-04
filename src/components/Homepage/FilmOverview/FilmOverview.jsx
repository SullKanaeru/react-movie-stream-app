import React from "react";
import "./FilmOverview.css";

const FilmOverview = ({ film, carouselSection }) => {
  const { title, category, image, episodes, duration, age } = film;
  return (
    <div className="film-overview">
      <div className="card">
        <img className="film-image" src={image} alt="Film Overview" />
        <div className="options">
          <div className="controller">
            <div className="left-controller">
              <div className="button-container play-btn-border">
                <i className="fa-solid fa-play play-btn"></i>
              </div>
              <div className="button-container check-btn-border">
                <i className="fa-solid fa-check check-btn"></i>
              </div>
            </div>
            <div className="right-controller">
              <div className="button-container chevron-btn-border">
                <i className="fa-solid fa-chevron-down chevron-btn"></i>
              </div>
            </div>
          </div>
          {
            // Setting untuk section continues-film
            carouselSection === "continues-film" ? (
              <>
                {category === "series" ? (
                  <div className="current-episode">
                    <p className="age">{age}</p>
                    <p>{episodes} episodes</p>
                  </div>
                ) : (
                  <div className="current-duration">
                    <p className="age">{age}</p>
                    <p>{duration}</p>
                  </div>
                )}
                <div className="seek-container">
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                  <p className="film-duration">2j 33m</p>
                </div>
              </>
            ) : // Setting untuk section top rating film
            category === "top-rating-film" ? (
              <div className="episode">
                <p className="age">{age}</p>
                <p>{episodes} episodes</p>
              </div>
            ) : (
              <div className="duration">
                <p className="age">{age}</p>
                <p>{duration}</p>
              </div>
            )
          }
          <div className="genres">
            <div className="genre">Action</div>
            <i className="fa-solid fa-circle"></i>
            <div className="genre">Drama</div>
            <i className="fa-solid fa-circle"></i>
            <div className="genre">Thriller</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmOverview;
