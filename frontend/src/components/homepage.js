import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"; // Updated styles

const HomePage = () => {
  return (
    <div className="homepage">

        {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-text">"Giving waste a second life through recycling"</h1>
      </section>

      {/* Stylish Logo & Navigation Bar */}
      <header className="navbar">
        <div className="logo">𝓣<sub>𝟤</sub>𝓣</div> {/* Stylish Font for Logo */}
        <nav>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/suggestion">Give Your Suggestion</Link></li>
          </ul>
        </nav>
        <Link to="/login" className="login-btn">Login</Link>
      </header>


      {/* Video Section */}
      <section className="video-section">
        <video autoPlay loop muted>
          <source src="/videos/t2t-trash-to-treasure-platform.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Solution Heading */}
      <h1 className="solution-title">OUR SOLUTION</h1>

      {/* 40% Height Space with Left Image and Right Text */}
      <section className="waste-info">
        <div className="waste-left">
        <img src="/images/himg.png" alt="Recycled Waste" />
        </div>
        <div className="waste-right">
          <h2>Reduce. Reuse. Recycle. Repeat</h2>
          <p>We recycle plastic, metal, paper, glass, e-waste, and more to ensure a cleaner environment.</p>
          <div className="buttons">
            <Link to="/login/buyer" className="buyer-btn">I Want to Buy</Link>
            <Link to="/login/seller" className="seller-btn">I Want to Sell</Link>
          </div>
        </div>
      </section>


      <section className="solution-head">
        <h1 style={{fontSize : "2.5rem"}}>T2T (TrashtoTreasure)</h1>
        <h3 style={{fontSize : "1.5rem"}}>Technology for a Sustainable Future</h3>
      </section>
      

      {/* Solution Content */}
      <section className="solution-content">
        <p>
          we bridge the gap between industries generating waste and recyclers 
          who can process it into valuable materials. Our platform:
        </p>
        <ul>
          <li>✔ Connects industries & recyclers seamlessly.</li>
          <li>✔ Reduces waste & promotes sustainability.</li>
          <li>✔ Allows businesses to buy back recycled materials.</li>
          <li>✔ Supports a circular economy for a cleaner planet.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 T2T - TrashToTreasure. All rights reserved.</p>
        <p>Contact us at: <a href="mailto:support@t2t.com">support@t2t.com</a></p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;