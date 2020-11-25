import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container footer-container">
        <Link to="/contact">Contact</Link>
        <Link to="/social">Social</Link>
        <Link to="/social">Social</Link>
      </div>
    </>
  )
}

export default Footer;
