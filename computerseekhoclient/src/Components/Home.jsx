import React from "react";
import "./Home.css"; // Import the CSS file
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h2 className="hero-title">Welcome to Vidyanidhi</h2>
          <p className="hero-text">
            Your one-stop destination for education, innovation, and growth. Explore our range of courses and build a brighter future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h3>About Us</h3>
          <p>
            Vidyanidhi is committed to providing top-notch education that empowers students to excel in academics and beyond. Our institution combines traditional values with modern teaching techniques to ensure holistic development.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2 className="courses-heading">Courses Offered</h2>

        <div className="course-card">
          <h5 className="course-title">PG DAC</h5>
          <p className="course-description">
            Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development.
          </p>
          <a href="pg-dac.php" className="course-link">Click to know more</a>
        </div>

        <div className="course-card">
          <h5 className="course-title">PG DBDA</h5>
          <p className="course-description">
            Post Graduate Diploma in Big Data Analytics (PG DBDA) enables students to explore the fundamental concepts of big data analytics.
          </p>
          <a href="pg-dbda.php" className="course-link">Click to know more</a>
        </div>

        <div className="course-card">
          <h5 className="course-title">Pre CAT</h5>
          <p className="course-description">
            The admission to all PG Courses by C-DAC ACTS is through an All-India C-DAC Common Admission Test (C-CAT)
          </p>
          <a href="pre-dac.php" className="course-link">Click to know more</a>
        </div>

        <h3 className="placement-record">Highest Placement Record for PG-DBDA and PG-DAC!!</h3>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2 className="why-choose-title">Why Choose SM VITA?</h2>
        <p className="why-choose-description">Our institute has been present for over 20 years in the market. We make the most of all our students.</p>

        <div className="features">
          <div className="feature">
            <img src="images/icon1.png" alt="Infrastructure" className="feature-icon" />
            <h4 className="feature-title">Best in class Infrastructure</h4>
          </div>

          <div className="feature">
            <img src="images/icon1.png" alt="Faculty" className="feature-icon" />
            <h4 className="feature-title">Best Faculty / Teachers</h4>
          </div>

          <div className="feature">
            <img src="images/icon1.png" alt="Methodology" className="feature-icon" />
            <h4 className="feature-title">Best Learning Methodology</h4>
          </div>

          <div className="feature">
            <img src="images/icon1.png" alt="Placement" className="feature-icon" />
            <h4 className="feature-title">More than 95% Placement for 10 Consecutive Batches</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <p>&copy; 2025 Vidyanidhi. All rights reserved. | <a href="#privacy">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;