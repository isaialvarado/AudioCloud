import React from 'react';
import { withRouter } from 'react-router';

class TracksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="tracks-index" key={this.props.track.pk}>
        <div className="tracks-index-all" onClick={() => this.props.router.push(`/${this.props.track.pk}`)}>
          <img className="tracks-index-img" src='https://res.cloudinary.com/dby3dvlvb/image/upload/v1484935666/e1_qptjz0.png'/>
          <h2>Title</h2>
          <label>By Artist</label>
      </div>
      </div>
    );
  }
}
// <h1>{this.props.track.title}</h1>
// <h1>{this.props.track.artist}</h1>
// <img src={this.props.track.imageUrl} />

export default withRouter(TracksIndexItem);
