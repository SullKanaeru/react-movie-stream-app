import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const toggleGenre = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company">
          <div className="company-logo"></div>
          <p>@2023 Chill All Rights Reserved.</p>
        </div>

        <div className="accordion-section genre">
          <input
            type="checkbox"
            id="genre-toggle"
            hidden
            checked={isGenreOpen}
            onChange={toggleGenre}
          />
          <label htmlFor="genre-toggle" className="accordion-title">
            Genre
          </label>
          {
            <div className="accordion-content">
              <ul>
                <li>
                  <a href="#">Aksi</a>
                </li>
                <li>
                  <a href="#">Anak-anak</a>
                </li>
                <li>
                  <a href="#">Anime</a>
                </li>
                <li>
                  <a href="#">Britania</a>
                </li>
                <li>
                  <a href="#">Drama</a>
                </li>
                <li>
                  <a href="#">Fantasi Ilmiah & Fantasi</a>
                </li>
                <li>
                  <a href="#">Kejahatan</a>
                </li>
                <li>
                  <a href="#">KDrama</a>
                </li>
                <li>
                  <a href="#">Komedi</a>
                </li>
                <li>
                  <a href="#">Petualangan</a>
                </li>
                <li>
                  <a href="#">Perang</a>
                </li>
                <li>
                  <a href="#">Romantis</a>
                </li>
                <li>
                  <a href="#">Sains & Alam</a>
                </li>
                <li>
                  <a href="#">Thriller</a>
                </li>
              </ul>
            </div>
          }
        </div>

        <div className="accordion-section bantuan">
          <input
            type="checkbox"
            id="bantuan-toggle"
            hidden
            checked={isHelpOpen}
            onChange={toggleHelp}
          />
          <label htmlFor="bantuan-toggle" className="accordion-title">
            Bantuan
          </label>
          {
            <div className="accordion-content">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Kontak Kami</a>
                </li>
                <li>
                  <a href="#">Privasi</a>
                </li>
                <li>
                  <a href="#">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
