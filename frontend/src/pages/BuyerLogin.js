// src/pages/BuyerLogin.js (similarly for SellerLogin.js and BothLogin.js)
import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // common style

const BuyerLogin = () => {
  return (
    <div className="login-form-container">
      <h2>BuyerLogin</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <div className="login-options">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="signup-section">
          <span>Don’t have an account? </span>
          <Link to="/signin">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default BuyerLogin;
