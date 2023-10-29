import React from 'react';
import '../components/design-files-css/SideMenu.css';
import { Link } from 'react-router-dom';

const SideMenuComponent = () => {

  return (
    <div className="side-menu">
      <ul>
        <li><Link to="/login" className="nav-button">Login</Link></li>
        <li><Link to="/signup" className="nav-button">Signup</Link></li>
        <li><Link to="/" className="nav-button" onClick={() => { alert('Logged out'); }}>Home</Link></li>
      </ul>
    </div>
  );
};

export default SideMenuComponent;
