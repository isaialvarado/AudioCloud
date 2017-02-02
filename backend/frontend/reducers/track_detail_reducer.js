import { RECEIVE_TRACK, CLEAR_TRACK_DETAIL } from '../actions/tracks_actions';
import { merge } from 'lodash';

export const _nullTrackDetail = Object.freeze({
  id: '',
  title: '',
  description: '',
  trackUrl: '',
  imageUrl: '',
  artist: '',
  userId: ''
});

export const trackDetailReducer = (state = _nullTrackDetail, action) => {
  Object.freeze(state);
  const newState = merge({}, _nullTrackDetail, state);
  switch (action.type) {
    case RECEIVE_TRACK:
      return action.track;
    case CLEAR_TRACK_DETAIL:
      return _nullTrackDetail;
    default:
      return state;
  }
};

export default trackDetailReducer;