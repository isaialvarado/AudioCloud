import React from 'react';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.params.trackId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.trackId !== newProps.params.trackId
        || this.props.currentUser !== newProps.currentUser) {
      this.props.fetchTrack(newProps.params.trackId);
    }
  }

  render() {
    const track = this.props.trackDetail.fields;

    return (
      <div className="track-show" id='track-detail'>
        <h1 className="track-show-title" id='track-detail-title'>{track.title}</h1>
        <h2 className="track-show-artist" id='track-detail-artist'>{track.artist}</h2>
        <div className="track-show-media" id='track-detail-play'>
          <img id='track-detail-image' src={track.image_url} />
          <div> </div>
          <audio controls preload="auto" src={track.track_url}/>
        </div>
        <p className="track-show-description" id='track-detail-description'>{track.description}</p>
      </div>
    );
  }
}

export default TrackDetail;
