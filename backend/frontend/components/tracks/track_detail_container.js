import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../actions/tracks_actions';

const mapStateToProps = ({ trackDetail, session }) => {

  return {
    currentUser: session.currentUser,
    trackDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: trackId => dispatch(fetchTrack(trackId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);
