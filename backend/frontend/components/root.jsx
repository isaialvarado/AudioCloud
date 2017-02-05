import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import TracksIndexContainer from './tracks/tracks_index_container';
import TrackDetailContainer from './tracks/track_detail_container';
import TrackCreateContainer from './tracks/track_create_container';
// import TrackFormContainer from './tracks/track_form_container';
// <Route path='new-track' component={TrackFormContainer} onEnter={_redirectIfLoggedOut} />
// <Route path='edit-track/:trackId' component={TrackFormContainer} onEnter={_redirectIfLoggedOut} />

const Root = ({ store }) => {
  const _redirectIfLoggedOut = (nextState, replace) => {
    if (store.getState().session.currentUser === null) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={TracksIndexContainer} />
          <Route path='search' component={TracksIndexContainer} />
          <Route path=':trackId' component={TrackDetailContainer} />
          <Route path='new-track' component={ TrackCreateContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
