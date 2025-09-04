import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username harus diisi";
    } else if (formData.username.length < 3) {
      errors.username = "Username minimal 3 karakter";
    }

    if (!formData.password) {
      errors.password = "Kata sandi harus diisi";
    } else if (formData.password.length < 6) {
      errors.password = "Kata sandi minimal 6 karakter";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Konfirmasi kata sandi harus diisi";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Kata sandi dan konfirmasi tidak cocok";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Register attempted with:", formData);
      navigate("/login");
    }
  };

  const handleGoogleRegister = () => {
    console.log("Google register attempted");
    navigate("/homepage");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form" noValidate>
        <img src="images/logo1.svg" alt="Logo Chill" className="logo-img" />

        <div className="title-form">
          <h1>Daftar</h1>
          <p>Selamat Datang!</p>
        </div>

        <div className="input-container">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Masukkan username"
            id="username-input"
            value={formData.username}
            onChange={handleChange}
            required
            className={formErrors.username ? "error" : ""}
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
              value={formData.password}
              onChange={handleChange}
              required
              className={formErrors.password ? "error" : ""}
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
        </div>

        <div className="input-container">
          <label htmlFor="password-confirm-input">Konfirmasi Kata Sandi</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Masukkan konfirmasi kata sandi"
              id="password-confirm-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={formErrors.confirmPassword ? "error" : ""}
            />
            <div className="password-icon-container">
              <span
                className="password-label"
                onClick={toggleConfirmPasswordVisibility}
              >
                <span className="toggle-password">
                  {showConfirmPassword ? (
                    <i className="fas fa-eye-slash icon-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye icon-eye"></i>
                  )}
                </span>
              </span>
            </div>
          </div>
          {formErrors.confirmPassword && (
            <span className="error-message">{formErrors.confirmPassword}</span>
          )}
          <div className="help-container">
            <p>
              Sudah punya akun? <Link to="/login">Masuk</Link>
            </p>
          </div>
        </div>

        <div className="button-container">
          <button type="submit" id="daftar-button">
            Daftar
          </button>
          <p>Atau</p>
          <button
            type="button"
            id="daftar-google-button"
            onClick={handleGoogleRegister}
          >
            <img src="images/google_logo.png" alt="Logo Google" />
            Daftar dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
