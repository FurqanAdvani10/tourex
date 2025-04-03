import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './header.css';
import { useNavigate } from 'react-router-dom';
// import { useNavigate }  from 'react-router-dom';
// import logo from '../../Assets/logo.png';
import logo from '../../assets/logo.png'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" />
        </div>
        <button className="navbar-toggler" type="button" onClick={handleMenuClick} aria-controls="navbarNav" aria-expanded={menuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link"  onClick={() => navigate('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/packages')}>Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/team')}>Team</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link"  onClick={() => navigate('/faqs')}>FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => navigate('/about-us')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => navigate('/contact')}>Contact</a>
            </li>
          </ul>
          <div className="navbar-icons">
            <button className="btn btn-outline-primary">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
