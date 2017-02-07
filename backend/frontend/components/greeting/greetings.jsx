import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
// import auth from './auth';

const sessionLinks = () => (
  <div className="nav-right">
    <ul className="nav-button">
      <Link to="/login" activeClassName="current">Demo</Link>
    </ul>
  </div>
);

const logout = () =>{
  sessionStorage.setItem("logged_in", "false");
};

const personalGreeting = () => (
  <div className="nav-right">
    <h2 className="nav-greet">Hi, Guest</h2>

      <ul className="nav-button">
        <Link to="/new-track">
          Create Track
        </Link>
      </ul>

      <ul className="nav-button">
        <button onClick={logout} className="nav-logout-button">
          <Link to="/">
            LogOut
          </Link>
        </button>
      </ul>
    </div>
);

const Greeting = () => (
  // localStorage.logged_in === "false" ? sessionLinks() :  personalGreeting()
  sessionStorage.logged_in === "false" ? sessionLinks() :  personalGreeting()
);

export default withRouter(Greeting);
