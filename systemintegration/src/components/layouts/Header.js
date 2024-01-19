import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="login-container">
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
