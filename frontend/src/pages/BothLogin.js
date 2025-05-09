import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";

const BothLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role: 'both', // 👈 Ensure this matches what's stored on registration
      });

      if (res.data.success) {
        alert("Login successful!");
        navigate('/dashboard/both'); // Redirect to dashboard for "both" role
      } else {
        alert(res.data.message); // Show server message (like "Invalid credentials")
      }
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login as Both</h2>
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
          <Link to="/signin">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default BothLogin;
