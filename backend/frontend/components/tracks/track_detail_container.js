import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../actions/tracks_actions';

const mapStateToProps = ({ trackDetail, session }) => {
  trackDetail = {
    id: 1,
    title: "This is the Title",
    artist: "artist",
    description: "something",
    image_url: "http://res.cloudinary.com/dby3dvlvb/image/upload/v1484935669/e36_w7iepu.jpg",
    track_url: "http://res.cloudinary.com/dby3dvlvb/video/upload/v1486229455/Elfen_Lied_vq9dx2.mp3"
  };

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
