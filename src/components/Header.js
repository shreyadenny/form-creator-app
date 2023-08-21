import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-form">Create Form</Link>
      <Link to="/form-list">Form List</Link>
    </nav>
  );
}

export default Header;
