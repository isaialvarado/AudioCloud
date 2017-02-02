import { connect } from 'react-redux';
import { fetchTracks, clearDetail } from '../../actions/tracks_actions';
import TracksIndex from './tracks_index';
import { tracksArray } from '../../reducers/selectors';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ tracks, session, search}) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;

  return {
    tracks: tracksArray(tracks),
    currentUserId,
    search
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchSearchResults: keywords => dispatch(fetchSearchResults(keywords)),
    clearDetail: () => dispatch(clearDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TracksIndex);
