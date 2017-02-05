import React from 'react';
import { connect } from 'react-redux';
import { createTrack } from '../../actions/tracks_actions';
import TrackCreate from './track_create';

const mapStateToProps = state => {
  return{
    track: state.track.track,
    errors: state.track.errors
  }
};


const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackCreate);
