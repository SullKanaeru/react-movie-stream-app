import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({setPage}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="navbar">
      <div className="left-navbar">
        <div className="logo-img" onClick={() => setPage("home")}></div>
        <p onClick={() => setPage("series")}>Series</p>
        <p onClick={() => setPage("film")}>Film</p>
        <p onClick={() => setPage("daftar-saya")}>Daftar Saya</p>
      </div>
      <div className="right-navbar">
        <div className="acc-container">
          <img className="acc-img" src="images/acc_img.png" alt="User" />
          <div className="setting-accordion">
            <input
              type="checkbox"
              id="setting-toggle"
              hidden
              checked={isSettingsOpen}
              onChange={toggleSettings}
            />
            <label htmlFor="setting-toggle" className="setting-icon">
              <i className="fas fa-chevron-down"></i>
            </label>
            {isSettingsOpen && (
              <div className="setting-detail">
                <a href="#">
                  <i className="fas fa-user"></i>Profil Saya
                </a>
                <a href="#">
                  <i className="fas fa-star"></i>Ubah Premium
                </a>
                <a href="/login">
                  <i className="fas fa-door-open"></i>Keluar
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
