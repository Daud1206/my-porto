import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Skills data organized by categories
  const skillsData = {
    frontend: [
      { name: 'React.js', level: 70, icon: '⚛️', experience: '1+ years' },
      { name: 'JavaScript', level: 50, icon: '🟨', experience: '2+ years' },
      { name: 'HTML', level: 60, icon: '🧡', experience: '2+ years' },
      { name: 'CSS', level: 75, icon: '🎨', experience: '2+ years' },
    ],
    backend: [
      { name: 'MySQL', level: 30, icon: '🐬', experience: '1+ years' },
      { name: 'C++', level: 65, icon: '⚙️', experience: '2+ years' },
      { name: 'C#', level: 30, icon: '🎮', experience: '1 year' },
      { name: 'Java', level: 40, icon: '☕', experience: '1+ years' },
      { name: 'Laravel', level: 20, icon: '🐘', experience: '1 year' }
    ],
    tools: [
      { name: 'GitHub', level: 30, icon: '📚', experience: '1+ years' },
      { name: 'VS Code', level: 75, icon: '💙', experience: '2+ years' },
      { name: 'Figma', level: 55, icon: '🎯', experience: '2+ years' },
      { name: 'Dev-C++', level: 70, icon: '📦', experience: '1+ years' },
      { name: 'Canva', level: 65, icon: '🐳', experience: '1+ years' },
      { name: 'XAMPP', level: 30, icon: '📋', experience: '3+ years' },
      { name: 'Eclipse', level: 85, icon: '🌒', experience: '1+ years' }
    ],
    soft: [
      { name: 'Problem Solving', level: 80, icon: '🧩', experience: '4+ years' },
      { name: 'Team Collaboration', level: 88, icon: '🤝', experience: '3+ years' },
      { name: 'Communication', level: 85, icon: '💬', experience: '3+ years' },
      { name: 'Project Management', level: 75, icon: '📊', experience: '2+ years' },
      { name: 'Learning Agility', level: 95, icon: '🎓', experience: '4+ years' },
      { name: 'Time Management', level: 80, icon: '⏰', experience: '3+ years' }
    ]
  };

  // Get filtered skills based on selected category
  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillsData[selectedCategory]?.map(skill => ({ ...skill, category: selectedCategory })) || [];
  };

  // Animation on scroll/load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setAnimatedSkills(prev => [...new Set([...prev, skillName])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedCategory]);

  const categories = [
    { key: 'all', label: 'All Skills', icon: '🎯' },
    { key: 'frontend', label: 'Frontend', icon: '💻' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'Tools', icon: '🛠️' },
    { key: 'soft', label: 'Soft Skills', icon: '🧠' }
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          {/* Menu */}
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li>
              <Link to="/skills" className="active">
                Skills <span className="active-dot"></span>
              </Link>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Profile */}
          <div className="profile-container" onClick={toggleProfile}>
            <div className="profile-pic">D</div>
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

      {/* Skills Page Content */}
      <div className="skills-page">
        {/* Hero Section */}
        <section className="skills-hero">
          <div className="hero-content">
            <h1 className="fade-in-up">My Technical Skills</h1>
            <p className="fade-in-up delay-1">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
            <div className="skills-summary fade-in-up delay-2">
              <div className="summary-item">
                <span className="summary-number">7+</span>
                <span className="summary-label">Technologies</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">4+</span>
                <span className="summary-label">Years Learning</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">5</span>
                <span className="summary-label">Projects Built</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="filter-container">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="skills-grid-section">
          <div className="skills-container">
            <div className="skills-grid">
              {getFilteredSkills().map((skill, index) => (
                <div
                  key={`${skill.name}-${skill.category}`}
                  className={`skill-card ${animatedSkills.includes(skill.name) ? 'animate-in' : ''}`}
                  data-skill={skill.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <div className="skill-details">
                        <h3 className="skill-name">{skill.name}</h3>
                        <span className="skill-experience">{skill.experience}</span>
                      </div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="skill-category-tag">
                    {skill.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Philosophy */}
        <section className="skills-philosophy">
          <div className="philosophy-content">
            <h2 className="fade-in-up">My Learning Philosophy</h2>
            <div className="philosophy-grid fade-in-up delay-1">
              <div className="philosophy-card">
                <div className="philosophy-icon">🎯</div>
                <h3>Continuous Learning</h3>
                <p>Always staying updated with the latest technologies and best practices in web development.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">🔧</div>
                <h3>Practical Application</h3>
                <p>Learning through building real projects and solving actual problems rather than just theory.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">🤝</div>
                <h3>Knowledge Sharing</h3>
                <p>Believing in sharing knowledge with the community and learning from fellow developers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section fade-in-up">
          <div className="cta-content">
            <h2>Want to See My Projects?</h2>
            <p>Check out my projects or let's discuss how I can contribute to your team</p>
            <div className="cta-buttons">
              <a 
                href="https://github.com/Daud1206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary github-button"
              >
                <svg className='github-icon' viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>

              <Link to="/contact">
                <button className="cta-button secondary">
                  <span className="button-icon">💬</span>
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
