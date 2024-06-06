import React from 'react';
import Layout from './Layout/Layout';
import './home.css';

const HomePage = () => {
  return (
    <Layout>
      <div className="home-content">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to EACamp</h1>
            <p>Empowering the next generation of tech leaders.</p>
            <a href="/about" className="btn">Learn More</a>
          </div>
          <div className="hero-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQjsC6aRapNFRXl4tDirS4Mf3-R6Bckq4mA&s" alt="EACamp Hero" />
          </div>
        </section>

        <section className="features">
          <h2>Why Choose EACamp?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="feature-card">
              <h3>Interactive Learning</h3>
              <p>Engage with hands-on projects, coding exercises, and more.</p>
            </div>
            <div className="feature-card">
              <h3>Career Support</h3>
              <p>Get assistance with resume building, job search, and interview prep.</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Our Students Comments</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"EACamp transformed my career. The instructors are top-notch!"</p>
              <h4>- Carlos Sainz, Software Engineer</h4>
            </div>
            <div className="testimonial-card">
              <p>"The hands-on approach helped me understand concepts better."</p>
              <h4>- Charles Leclerc, Data Scientist</h4>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Start Your Journey?</h2>
         
          <a href="/contact" className="btn">Get Started</a>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
