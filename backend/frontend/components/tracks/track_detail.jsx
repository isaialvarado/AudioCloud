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
    const track = this.props.trackDetail;

    return (
      <div id='track-detail'>
        <h1 id='track-detail-title'>{track.title}</h1>
        <h1 id='track-detail-artist'>{track.artist}</h1>
        <div id='track-detail-play'>
          <img id='track-detail-image' src={track.imageUrl} />
        </div>
        <p id='track-detail-description'>{track.description}</p>
      </div>
    );
  }
}

export default TrackDetail;
