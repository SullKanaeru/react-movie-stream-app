import React, { useState } from "react";
import "./HeroContainer.css";

const HeroContainer = ({ page }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <>
      <div className="hero-container">
        {page === "home" && (
          <img
            className="hero-image"
            src="images/hero-banner-home.png"
            alt="Hero Banner"
          />
        )}
        {page === "series" && (
          <img
            className="hero-image"
            src="images/hero-banner-series.png"
            alt="Hero Banner"
          />
        )}
        {page === "film" && (
          <img
            className="hero-image"
            src="images/hero-banner-film.png"
            alt="Hero Banner"
          />
        )}
        <div className="hero-detail">
          {page === "home" && (
            <>
              <h1 className="hero-film-name">Duty After School</h1>
              <p className="hero-film-synopsis">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
              </p>
            </>
          )}
          {page === "series" && (
            <>
              <h1 className="hero-film-name">Happiness</h1>
              <p className="hero-film-synopsis">
                Mengisahkan tentang kelompok orang yang berjuang untuk bertahan
                hidup di dalam sebuah gedung apartemen yang penuh dengan zombie.
                Sayangnya, virus zombie hanya terdapat di dalam area apartemen
                tersebut dan tidak menyebar ke luar kawasan apartemen.
              </p>
            </>
          )}
          {page === "film" && (
            <>
              <h1 className="hero-film-name">Avatar</h1>
              <p className="hero-film-synopsis">
                "Avatar 3" melanjutkan cerita konflik antara manusia dan Na'vi
                di planet Pandora. Dalam pertempuran untuk sumber daya dan
                kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi
                tanah mereka. Film ini mengangkat tema persatuan dan perlawanan
                terhadap eksploitasi.
              </p>
            </>
          )}
          <div className="hero-button-container">
            <div className="button-left-container">
              <button className="mulai-btn">Mulai</button>
              <button className="selengkapnya-btn">
                <i className="fas fa-info-circle"></i>Selengkapnya
              </button>
              <p className="age">18+</p>
            </div>
            <div className="button-right-container">
              <input
                type="checkbox"
                id="toggle"
                className="toggle"
                hidden
                checked={isSoundOn}
                onChange={toggleSound}
              />
              <label className="sound-btn" htmlFor="toggle">
                <span className="icon-wrapper">
                  <i
                    className={`fas fa-volume-${isSoundOn ? "up" : "mute"}`}
                  ></i>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
