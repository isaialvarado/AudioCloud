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
          <img className="tracks-index-img" src={this.props.track.fields.image_url}/>
          <h2>{this.props.track.fields.title}</h2>
          <label>By {this.props.track.fields.artist}</label>
      </div>
      </div>
    );
  }
}
// <h1>{this.props.track.title}</h1>
// <h1>{this.props.track.artist}</h1>
// <img src={this.props.track.imageUrl} />

export default withRouter(TracksIndexItem);
