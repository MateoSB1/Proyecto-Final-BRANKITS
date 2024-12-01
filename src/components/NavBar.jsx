import { StrictMode } from 'react'
// import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/images/LogoWEB.png';

function NavBar() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="Brankits logo" />
        <h1>BRANKITS</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">CAMISETAS</a></li>
          <li><a href="#">PANTALONES</a></li>
          <li><a href="#">BUZOS</a></li>
          <li><a href="#">BOTINES</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
