import { RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/tracks_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

export const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case REMOVE_TRACK:
      delete newState[action.track.id];
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
