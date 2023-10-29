import React from 'react';
import {Link} from 'react-router-dom';
import './design-files-css/Header.css';

const Header = () => {
    return (
        <nav className="nav-header">
            <div className="logo-container">
                <img className="nav-logo" src='/logoForHeader.png' alt="Logo"/>
                <span className="logo-text">Whatandwhere</span>
            </div>
            <Link to="/" className="nav-button">
                <img src='/homeButton.png' alt="Home"/>
            </Link>
        </nav>
    );
};

export default Header;
