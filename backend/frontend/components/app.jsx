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
      <div className="nav-app-name">
        <h1>AUDIOCLOUD</h1>
      </div>
      <div className="nav-author">
        <h3>This App is designed by :
          <a href="https://github.com/isaialvarado" > Joel Isai Alvarado</a>
          <a href="https://github.com/aaduru" >Ujwala Aaduru</a>
          <a href="https://github.com/zidianlyu/" >Zidian Lyu</a>
        </h3>
      </div>
    </header>
    <div className="main-body">
      {children}
    </div>
  </nav>
);

export default App;
