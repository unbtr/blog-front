import React from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

const Header = () => (
  <header className="header">
    <ul className="header__list">
      <li className="header__list-item">
        <Link to="/" className="header__link">Home</Link>
      </li>
      <li className="header__list-item">
        <Link to="/new" className="header__link">New +</Link>
      </li>
    </ul> 
  </header>
);

export default Header;