import React from 'react';
import { Link } from 'react-router';
import Greeting from './greeting/greetings';

import TrackCreateContainer from './tracks/track_create_container';

import auth from './auth';

const App = ({ children }) => (
  <nav className="navbar">
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <ul className="nav-button">
            <Link to="/">Home </Link>
          </ul>
        </div>

        <Greeting />
      </div>
    </header>
    <div className="main-body">
      {children}
    </div>
  </nav>
);

export default App;
