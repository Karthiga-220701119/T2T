import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const selectedRole = localStorage.getItem("selectedRole");
    if (selectedRole) setRole(selectedRole);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) return alert("Please agree to the terms & conditions.");
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match.");

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        ...formData,
        role,
      });

      if (res.data.success) {
        alert("Registered successfully!");
        navigate("/login"); // redirect to login page
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="checkbox-container">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to the <a href="#">Terms & Conditions</a>
        </label>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
