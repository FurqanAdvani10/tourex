import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAnimate(true); // trigger animation on mount
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Packages', path: '/packages' },
    { label: 'Team', path: '/team' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top 
        ${scrolled ? 'scrolled' : ''} 
        ${animate ? 'animate-navbar' : ''}`}
    >
      <div className="container">
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-icons">
            <button className="btn btn-outline-primary" onClick={() => handleNavigation('/contact')}>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
