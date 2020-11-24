import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div class="container">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/social">Social</Link>
        <Link to="/social">Social</Link>
      </div>
    </>
  )
}

export default Footer;
