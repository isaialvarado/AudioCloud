import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="header-login-signup">
    <Link to="/login" activeClassName="current">Demo</Link>
  </nav>
);

const personalGreeting = () => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, User!</h2>
    <button className="log_out_button" >Log Out</button>
      <Link to="/new-track">
        Create Track
      </Link>
	</hgroup>
);

const Greeting = () => (
  localStorage.logged_in === "false" ? sessionLinks() :  personalGreeting()
);

export default Greeting;
