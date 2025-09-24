import React, { useState } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          {/* Menu */}
          <ul className="menu">
            <li>
              <Link to="/" className="active">
                Home <span className="active-dot"></span>
              </Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Profile */}
          <div className="profile-container" onClick={toggleProfile}>
            <div className="profile-pic">
              D
            </div>
            
            {isProfileOpen && (
              <div className="profile-dropdown">
                <p className="profile-name">Daud</p>
                <p className="profile-title">Front-End Developer</p>
                <p className="profile-email">dauddavid511@email.com</p>
                <hr className="profile-divider" />
                <p className="profile-action">Settings</p>
                <p className="profile-action">Logout</p>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Front-End Developer | Problem Solver
        </p>
        <p className="hero-description">
          I create modern & responsive web.
          Explore my profile and let's build something amazing together.
        </p>
      </section>

      {/* Box Container - Only for Experience, Skills, Projects */}
      <div className="box-container">
        {/* Experience Box */}
        <Link to="/experience" className="box">
          <div className="box-icon">💼</div>
          <div className="box-text">Experience</div>
        </Link>

        {/* Skills Box */}
        <Link to="/skills" className="box">
          <div className="box-icon">🚀</div>
          <div className="box-text">Skills</div>
        </Link>

        {/* Contact Box */}
        <Link to="/contact" className="box">
          <div className="box-icon">💬</div>
          <div className="box-text">Contact</div>
        </Link>
      </div>
    </>
  );
};

export default Home;