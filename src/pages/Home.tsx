import React from "react";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-banner"
        style={{
          backgroundImage:
            "url('/src/assets/hero.jpg')", // you can replace with your uploaded image path
        }}
      >
        <div className="hero-content">
          <p className="hero-subtitle">
            Online Surgical Equipment store in Pakistan
          </p>
          <h1 className="hero-title">
            Boost Your Health with <span>Well Serve Enterprises</span>
          </h1>
          <p className="hero-description">
            Abundant stock, fastest services, quality-assured, fair prices, and
            much more
          </p>
          
          <Link to="/products" className="hero-button">
            Shop Now
          </Link>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h3>Why Choose Us?</h3>
        <div className="features-list">
          <div className="feature-item">
            <h4>Reliable Service</h4>
            <p>Fast and dependable order fulfillment.</p>
          </div>
          <div className="feature-item">
            <h4>High Quality</h4>
            <p>Trusted brands with top-tier standards.</p>
          </div>
          <div className="feature-item">
            <h4>Nationwide Delivery</h4>
            <p>Doorstep delivery all across Pakistan.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
