import React from "react";
import "../styles/About.css";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div>
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="hero-title">About Well Serve Enterprises</h1>
        <p className="hero-subtitle">
          Pakistan’s trusted supplier for surgical, medical & healthcare equipment.
        </p>
      </section>

      {/* Mission Vision Cards */}
      <section className="about-section fade-in">
        <div className="about-cards">

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To provide reliable, affordable and high-quality healthcare products
              across Pakistan with unmatched service and fast doorstep delivery.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become Pakistan’s largest and most trusted medical supplier,
              empowering every hospital, clinic and home with quality equipment.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Values</h3>
            <p>
              Integrity, Quality, Reliability and Customer Satisfaction are at
              the heart of everything we do.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section fade-in">
        <div className="stat-box">
          <h2>1M+</h2>
          <p>Satisfied Buyers</p>
        </div>
        <div className="stat-box">
          <h2>2M+</h2>
          <p>Orders Delivered</p>
        </div>
        <div className="stat-box">
          <h2>100%</h2>
          <p>Moneyback Guarantee</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section fade-in">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ High-quality surgical & medical equipment</li>
          <li>✔ Fast nationwide delivery</li>
          <li>✔ Secure ordering & payment</li>
          <li>✔ Affordable pricing with exclusive discounts</li>
          <li>✔ Fully verified products with satisfaction guarantee</li>
        </ul>
      </section>
      </div>
   <Footer />
    </div>
  );
};

export default About;
