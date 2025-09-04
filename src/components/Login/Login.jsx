import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username harus diisi";
    }

    if (!password) {
      errors.password = "Kata sandi harus diisi";
    } else if (password.length < 6) {
      errors.password = "Kata sandi minimal 6 karakter";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login attempted with:", { username, password });
      navigate("/homepage");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempted");
    navigate("/homepage");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <img src="images/logo1.svg" alt="Logo Chill" className="logo-img" />
        <div className="title-form">
          <h1>Masuk</h1>
          <p>Selamat Datang kembali!</p>
        </div>

        <div className="input-container">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            id="username-input"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (formErrors.username) {
                setFormErrors({ ...formErrors, username: "" });
              }
            }}
            required
          />
          {formErrors.username && (
            <span className="error-message">{formErrors.username}</span>
          )}
        </div>

        <div className="input-container">
          <label htmlFor="password-input">Kata Sandi</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Masukkan kata sandi"
              id="password-input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // Hapus error saat user mulai mengetik
                if (formErrors.password) {
                  setFormErrors({ ...formErrors, password: "" });
                }
              }}
              required
            />
            <div className="password-icon-container">
              <span
                className="password-label"
                onClick={togglePasswordVisibility}
              >
                <span className="toggle-password">
                  {showPassword ? (
                    <i className="fas fa-eye-slash icon-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye icon-eye"></i>
                  )}
                </span>
              </span>
            </div>
          </div>
          {formErrors.password && (
            <span className="error-message">{formErrors.password}</span>
          )}
          <div className="help-container">
            <p>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </p>
            <a href="#">Lupa kata sandi?</a>
          </div>
        </div>

        <div className="button-container">
          <button type="submit" id="masuk-button">
            Masuk
          </button>
          <p>Atau</p>
          <button
            type="button"
            id="masuk-google-button"
            onClick={handleGoogleLogin}
          >
            <img src="images/google_logo.png" alt="Logo Google" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
