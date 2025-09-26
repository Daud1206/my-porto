import React, { useState } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import { FaLaptopCode, FaRobot, FaCloud, FaLock, FaMicrochip } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // View CV Handler - Opens PDF in new tab for viewing
  const handleView = () => {
    // Opens /CV.pdf in new tab (browser PDF viewer)
    window.open('/CV.pdf', '_blank', 'noopener,noreferrer');
  };

  // Generate tech icons 
  const generateTechIcons = () => {
    const icons = [FaLaptopCode, FaRobot, FaCloud, FaLock, FaMicrochip];
    const techShapes = [];

    for (let i = 0; i < 15; i++) {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      techShapes.push({
        id: i,
        Icon,
        size: Math.random() * 60 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 20 + 10,
        animationDelay: Math.random() * -20,
      });
    }
    return techShapes;
  };

  const [techShapes] = useState(generateTechIcons);

  return (
    <div className="home-container">
      {/* Animated Tech Background */}
      <div className="animated-background">
        {techShapes.map((shape) => (
          <shape.Icon
            key={shape.id}
            className="floating-tech-icon"
            style={{
              fontSize: `${shape.size}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDuration: `${shape.animationDuration}s`,
              animationDelay: `${shape.animationDelay}s`,
              position: "absolute",
              opacity: 0.15,
              color: "#00f2ff"
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav">
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
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Profile */}
          <div className="profile-container" onClick={toggleProfile}>
            <div className="profile-pic">D</div>

            {isProfileOpen && (
              <div className="profile-dropdown">
                <p className="profile-name">Daud</p>
                <p className="profile-title">Software Engineering</p>
                <p className="profile-email">dauddavid511@email.com</p>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Software Engineering | Front-End Developer | Problem Solver
        </p>
        <p className="hero-description">
          I create modern & responsive web.
          Explore my profile and let's build something amazing together.
        </p>
      </section>

      {/* Box Container */}
      <div className="box-container">
        <Link to="/experience" className="box">
          <div className="box-icon">💼</div>
          <div className="box-text">Experience</div>
        </Link>

        <Link to="/skills" className="box">
          <div className="box-icon">🚀</div>
          <div className="box-text">Skills</div>
        </Link>

        <Link to="/contact" className="box">
          <div className="box-icon">💬</div>
          <div className="box-text">Contact</div>
        </Link>
      </div>

      {/* CV Section - View*/}
      <section className="cv-section">
        <h2>View my CV</h2>
        <div className="cv-preview-container">
          {/* View Button - Opens PDF in new tab */}
          <button
            className="cv-action-btn view-btn"
            onClick={handleView}
          >
            <FiEye size={16} />
            <span>View CV</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
