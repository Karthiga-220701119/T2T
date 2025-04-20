// src/pages/SellerLogin.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

const SellerLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // You can later add actual authentication logic here

    // Redirect to industry dashboard
    navigate("/dashboard/industry");
  };

  return (
    <div className="login-form-container">
      <h2>Seller Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>

        <div className="login-options">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className="signup-section">
          <span>Don’t have an account? </span>
          <Link to="/signin">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default SellerLogin;
