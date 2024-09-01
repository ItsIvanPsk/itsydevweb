import React from 'react';
import logo from '../assets/logos/itsydev-logo.png';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/proyects">Proyectos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
