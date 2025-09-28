import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const experiences = [
    {
      id: 1,
      company: "Kopi Petik",
      position: "Barista",
      duration: "2023",
      location: "Medan, Indonesia",
      description: "Prepared and served a wide variety of coffee and non-coffee beverages while ensuring excellent customer service and maintaining a clean, welcoming environment. Assisted in daily operations to support smooth cafe workflow.",
      technologies: ["Espresso Machine", "Grinder", "Inventory Management", "Customer Service Tools"],
      achievements: [
        "Gained experience in teamwork, customer interaction, and time management in a fast-paced environment.",
        "Contributed to operational efficiency by reducing average serving time by 15%."
      ]
    },
    {
      id: 2,
      company: "Binus University Project",
      position: "UI/UX Designer",
      duration: "2024",
      location: "Jakarta, Indonesia",
      description: "Designed modern and responsive website layouts using Figma, focusing on user-friendly interfaces and seamless user experience. Collaborated with developers to ensure design feasibility and consistency across devices.",
      technologies: ["Figma", "Canva"],
      achievements: [
        "Successfully delivered a complete website design fully aligned with the initial project plan.",
        "Created design concepts that closely matched user preferences and expectations."
      ]
    },
    {
      id: 3,
      company: "Binus University Project",
      position: "UI/UX Designer",
      duration: "2024",
      location: "Jakarta, Indonesia",
      description: "Designed a modern messenger application with core features such as chat, voice call, video call, etc. Focused on creating a clean and intuitive interface that enhances user communication and accessibility across devices.",
      technologies: ["Figma", "Canva"],
      achievements: [
        "Successfully designed a complete messenger application concept with chat, voice call, and video call functionality.",
        "Delivered an interactive prototype that simulated real user interactions for better presentation and testing."
      ]
    },
    {
      id: 4,
      company: "Binus University Project",
      position: "Front-End Developer",
      duration: "2025",
      location: "Jakarta, Indonesia",
      description: "Developed a front-end music website focused on simplicity and user needs. The platform allows users to easily explore, play, and organize music without complexity, offering a clean, responsive, and intuitive interface for a seamless listening experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      achievements: [
        "Delivered the project within the given deadline as part of the university coursework.",
        "Learned and implemented React.js",
        "Received positive feedback from lecturer."
      ]
    },
    {
      id: 5,
      company: "Binus University Project",
      position: "Software Engineer - Code Refactoring",
      duration: "2025",
      location: "Jakarta, Indonesia",
      description: "Refactored existing codebase to improve maintainability, readability, and performance by restructuring components, optimizing rendering, and enforcing coding standards.",
      technologies: ["Java", "Git", "XAMPP"],
      achievements: [
        "Improved code readability and maintainability by applying clean code principles.",
        "Enhanced application performance and reduced bugs by optimizing existing code structure.",
      ]
    }
  ];

  // Animation on scroll/load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setAnimatedItems(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          {/* Menu */}
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/experience" className="active">
                Experience <span className="active-dot"></span>
              </Link>
            </li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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

      {/* Experience Page Content */}
      <div className="experience-page">
        {/* Hero Section */}
        <section className="experience-hero">
          <div className="hero-content">
            <h1 className="fade-in-up">My Professional Journey</h1>
            <p className="fade-in-up delay-1">
              Explore my career progression and the exciting projects I've worked on
            </p>
            <div className="hero-stats fade-in-up delay-2">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Companies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`experience-card ${animatedItems.includes(exp.id) ? 'animate-in' : ''}`}
                data-id={exp.id}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="position">{exp.position}</h3>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <div className="company-info">
                    <h4 className="company">{exp.company}</h4>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                  <p className="description">{exp.description}</p>
                  <div className="technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section fade-in-up">
          <div className="cta-content">
            <h2>Check the project i have done</h2>
            <a
              href="https://www.canva.com/design/DAGzOvhqNgg/mUI6bSiTEY4nUc2GS-DJ7w/edit?utm_content=DAGzOvhqNgg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-button">View Project</button>
            </a>

          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
