import React from 'react';
import { Link } from 'react-router';
import Greeting from './greeting/greetings';

import TrackCreateContainer from './tracks/track_create_container';

import auth from './auth';

const App = ({ children }) => (
  <div>
    <header>
      <div>
        <div>
          <Link to="/">Home </Link>
        </div>
        <div>
          <Greeting />
        </div>
      </div>
    </header>
    {children}
  </div>
);

export default App;
