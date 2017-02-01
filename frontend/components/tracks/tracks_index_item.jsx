import React from 'react';
import { withRouter } from 'react-router';

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div key={this.props.track.id}>
        <div onClick={() => this.props.router.push(`/${this.props.track.id}`)}>
          <h1>{this.props.track.title}</h1>
          <h1>{this.props.track.artist}</h1>
          <img src={this.props.track.imageUrl} />
        </div>
      </div>
    );
  }
}

export default withRouter(TracksIndexItem);
