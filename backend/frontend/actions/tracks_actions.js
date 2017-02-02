import * as TracksAPIUtil from '../util/tracks_api_util';
import receiveErrors from './errors_actions';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const CLEAR_TRACK_DETAIL = 'CLEAR_TRACK_DETAIL';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const clearTrackDetail = () => ({
  type: CLEAR_TRACK_DETAIL
});

export const clearDetail = () => dispatch => (
  dispatch(clearTrackDetail())
);

export const fetchTracks = () => dispatch => (
  TracksAPIUtil.fetchTracks().then(tracks => dispatch(receiveTracks(tracks)))
);

export const fetchTrack = trackId => dispatch => (
  TracksAPIUtil.fetchTrack(trackId).then(track => dispatch(receiveTrack(track)))
);

export const createTrack = track => dispatch => (
  TracksAPIUtil.createTrack(track).then(
    newTrack => dispatch(receiveTrack(newTrack)),
    errors => dispatch(receiveErrors({ track: errors.responseJSON }))
  )
);

export const updateTrack = track => dispatch => (
  TracksAPIUtil.updateTrack(track).then(
    updatedTrack => dispatch(receiveTrack(updatedTrack)),
    errors => dispatch(receiveErrors({ track: errors.responseJSON }))
  )
);
