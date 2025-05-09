import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";

const SellerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
        role: 'seller',
      });

      if (res.data.success) {
        const { email, company_name, name } = res.data.user;  // assuming your backend returns this
      
        alert("Login successful!");
      
        localStorage.setItem("recyclerEmail", email);
        localStorage.setItem("recyclerCompany", company_name);   // ✅ needed for dashboard match
        localStorage.setItem("recyclerPerson", name);            // ✅ needed for dashboard match
      
        window.open("/dashboard/industry", "_blank");  // ✅ go to recycler dashboard
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
      <h2>Seller Login</h2>
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

export default SellerLogin;
