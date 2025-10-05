import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const [copiedText, setCopiedText] = useState('');

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Contact information
  const contactInfo = [
    {
      id: 1,
      type: 'email',
      label: 'Email',
      value: 'dauddavid511@gmail.com',
      display: 'dauddavid511@gmail.com',
      icon: '📧',
      color: '#EA4335',
      action: 'mailto:dauddavid511@gmail.com',
      copyable: true,
      description: 'Send me an email'
    },
    {
      id: 2,
      type: 'phone',
      label: 'Phone',
      value: '+62 813-6042-5718',
      display: '+62 813-6042-5718',
      icon: '📱',
      color: '#25D366',
      action: 'tel:+6281360425718',
      copyable: true,
      description: 'Call or WhatsApp me'
    },
    {
      id: 3,
      type: 'instagram',
      label: 'Instagram',
      value: '@davd12__',
      display: '@davd12__',
      icon: '📸',
      color: '#E4405F',
      action: 'https://instagram.com/davd12__',
      copyable: false,
      description: 'Follow me on Instagram'
    },
    {
      id: 4,
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'Daud -',
      display: 'Daud -',
      icon: '💼',
      color: '#0077B5',
      action: 'https://www.linkedin.com/in/davd2005',
      copyable: false,
      description: 'Connect with me professionally'
    },
    {
      id: 5,
      type: 'github',
      label: 'GitHub',
      value: '@daud1206',
      display: '@daud1206',
      icon: '💻',
      color: '#333',
      action: 'https://github.com/Daud1206',
      copyable: false,
      description: 'Check out my projects'
    }
  ];

  // Copy to clipboard function
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  // Handle contact action
  const handleContactAction = (contact) => {
    if (contact.copyable) {
      copyToClipboard(contact.value, contact.type);
    } else {
      window.open(contact.action, '_blank');
    }
  };

  // Animation on scroll/load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setAnimatedCards(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          {/* Menu */}
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact" className="active">
                Contact
                <span className="active-dot"></span>
              </Link>
            </li>
          </ul>

          {/* Profile */}
          <div className="profile-container" onClick={toggleProfile}>
            <img
              src="/img/Pas-foto.png"
              alt="Profile"
              className="profile-pic"
            />

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

      {/* Contact Page Content */}
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1 className="fade-in-up">Let's Get In Touch</h1>
            <p className="fade-in-up delay-1">
              I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology!
            </p>
            <div className="hero-decoration fade-in-up delay-2">
              <div className="floating-icons">
                <span className="float-icon">💬</span>
                <span className="float-icon">📞</span>
                <span className="float-icon">✉️</span>
                <span className="float-icon">🤝</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="contact-cards-section">
          <div className="contact-container">
            <div className="section-header">
              <h2 className="fade-in-up">How to Reach Me</h2>
              <p className="fade-in-up delay-1">Choose your preferred way to connect</p>
            </div>

            <div className="contact-grid">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.id}
                  className={`contact-card ${animatedCards.includes(contact.id) ? 'animate-in' : ''}`}
                  data-id={contact.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleContactAction(contact)}
                >
                  <div className="contact-card-inner">
                    <div className="contact-icon" style={{ backgroundColor: contact.color }}>
                      {contact.icon}
                    </div>
                    
                    <div className="contact-info">
                      <h3 className="contact-label">{contact.label}</h3>
                      <p className="contact-value">{contact.display}</p>
                      <span className="contact-description">{contact.description}</span>
                    </div>

                    <div className="contact-action">
                      {contact.copyable ? (
                        <div className="copy-indicator">
                          {copiedText === contact.type ? (
                            <span className="copied-text">✅ Copied!</span>
                          ) : (
                            <span className="copy-text">📋 Click to copy</span>
                          )}
                        </div>
                      ) : (
                        <div className="link-indicator">
                          <span className="link-text">🔗 Visit</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="contact-card-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="quick-actions-section">
          <div className="quick-actions-content">
            <h2 className="fade-in-up">Quick Actions</h2>
            <div className="quick-actions-grid fade-in-up delay-1">
              <button 
                className="quick-action-btn email-btn"
                onClick={() => window.location.href = 'mailto:dauddavid511@gmail.com?subject=Hello Daud!&body=Hi Daud, I would like to discuss...'}
              >
                <span className="quick-action-icon">✉️</span>
                <span className="quick-action-text">Send Email</span>
              </button>
              
              <button 
                className="quick-action-btn whatsapp-btn"
                onClick={() => window.open('https://wa.me/6281360425718?text=Hello%20Daud!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.', '_blank')}
              >
                <span className="quick-action-icon">💬</span>
                <span className="quick-action-text">WhatsApp</span>
              </button>
              
            </div>
          </div>
        </section>

        {/* Availability Status */}
        <section className="availability-section fade-in-up">
          <div className="availability-content">
            <div className="status-indicator">
              <div className="status-dot online"></div>
              <span className="status-text">Currently Available for Projects</span>
            </div>
            <p className="availability-note">
              I typically respond within 24 hours. Looking forward to hearing from you! 🚀
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
