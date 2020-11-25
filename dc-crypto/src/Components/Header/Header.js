import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="container header-container">
        <h3>DC Crypto</h3>
        <Link to="/about">About</Link>
        <Link to="/data-viz">Data Viz</Link>
        <Link to="/favorites">Fav Crypto</Link>
        <Link to="/all">All Crypto</Link>
      </div>
    </>
  )
}

export default Header;
