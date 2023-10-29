import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
  return (
    <div className="entry">
      <div className="logo-header-container">
        <img src="/peopleparty.png" alt="Logo" className="logo" />
        <div className="header">What</div>
        <div className="header2">and</div>
        <div className="header3">where</div>
      </div>
      <div className="button-container">
        <div className="entry-buttons">
          <Link to="/login" className="entry-button">Login</Link>
          <Link to="/signup" className="entry-button">Signup</Link>
          <Link to="/mainpage" className="entry-button">MainPage</Link>
        </div>
      </div>
      <div className="parag-text-container">
        <div className="paragraph">"Not getting invited is just a friendly reminder that you need to start planning your own events."</div>
        <div className="author">-Founder</div>
      </div>
    </div>
  );
};

export default Entry;
