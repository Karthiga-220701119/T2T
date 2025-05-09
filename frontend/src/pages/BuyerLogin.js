import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";

const BuyerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role: 'buyer',
      });

      if (res.data.success) {
        alert("Login successful!");
        localStorage.setItem("recyclerEmail", email);
        window.open("/dashboard/recycler", "_blank");
 // ✅ buyer-specific dashboard
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Buyer Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>

        <div className="login-options">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className="signup-section">
          <span>Don’t have an account? </span>
          <Link to="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default BuyerLogin;
