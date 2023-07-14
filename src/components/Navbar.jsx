import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({cartItems, handleSearch}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">MyStore</h2>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." onChange={handleSearch}/>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <ul className={`navbar-links ${isOpen ? 'show-menu' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/items" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/cart" onClick={toggleMenu}><div className='cart-navbar'>Cart <div className='cart-count'>{cartItems.length}</div></div></Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
