import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header className='Header'>
    <nav className='Nav'>
      <Link to="/">Home</Link>
      <Link to="/create-form">Create Form</Link>
      <Link to="/form-list">Form List</Link>
    </nav>
    </header>
  );
}

export default Header;
