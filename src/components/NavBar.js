import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">TTW ZONE</div>
      <nav className="navbar">
        <ul>
          <li className="navbar-item">Blog</li>
          <li className="navbar-item">Post</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
