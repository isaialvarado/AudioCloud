import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="nav-right">
    <ul className="nav-button">
      <Link to="/login" activeClassName="current">Demo</Link>
    </ul>
  </div>
);

const personalGreeting = () => (
  <div className="nav-right">
    <h2 className="nav-greet">Hi, Guest</h2>
      <ul className="nav-button">
        <Link to="/new-track">
          Create Track
        </Link>
      </ul>
    </div>
);

const Greeting = () => (
  localStorage.logged_in === "false" ? sessionLinks() :  personalGreeting()
);

export default Greeting;
