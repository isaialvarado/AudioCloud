import React from 'react';
import { Link, withRouter } from 'react-router';
import CLOUDINARY_ACCESS from './cloudinary_access';

class TrackCreate extends React.Component {
  // debugger;
  constructor(props){
    super(props);
    this.state = {
      title: "",
      artist: "",
      image_url: "",
      track_url: "",
      description: ""
    };

    this.trackEls = this.trackEls.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTrackState = this.updateTrackState.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  }

  updateTrackState(prop){
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }


  updateImageFile(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dby3dvlvb',
        upload_preset: 'audiocloud',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if(errors === null){
          let cloud_url = imageInfo[0].secure_url;
          this.setState({
            image_url: cloud_url
          });
        }
      }
    );
  }

  updateAudioFile(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dby3dvlvb',
        upload_preset: 'audiocloud',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if(errors === null){
          let cloud_url = imageInfo[0].secure_url;
          this.setState({
            track_url: cloud_url
          });
        }
      }
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const track = Object.assign(
      this.state,
      { user_id: "1"}
    );
    this.props.createTrack(track).then(
      (res) => {
        let num;
        if(res.track){
          num = res.track[0].pk;
        } else {
          num = "";
        }
        this.props.router.push(`/${num}`);
      }
    );
  }

  trackEls() {
    return (
      <div>
        <header className="track-create-detail">
          <h3>
            Track Details
          </h3>
        </header>

        <form className="track-create-form" onSubmit={this.handleSubmit}>
          <div>
            <h4>Title</h4>
            <input
              type="text"
              value={this.state.title}
              onChange={this.updateTrackState('title')}
              placeholder={"  Enter title"}
              required>
            </input>

            <h4>Artist</h4>
            <input
              type="text"
              value={this.state.location}
              onChange={this.updateTrackState('artist')}
              placeholder={"  Enter Artist"}
              required>
            </input>
          </div>

          <h4>Cover Image</h4>
          <span>
            <div className="track-create-image">
              <input
                className="track-create-cloudinary-button"
                type="submit"
                value="Add Image"
                onClick={this.updateImageFile}
                required>
              </input>

              <img
                src={this.state.image_url}>
              </img>
            </div>
          </span>

          <h4>Audio</h4>
          <span>
            <div className="track-create-audio">
              <input
                className="track-create-cloudinary-button"
                type="submit"
                value="Add Audio"
                onClick={this.updateAudioFile}
                required>
              </input>

              <audio
                controls preload="auto"
                src={this.state.track_url}>
              </audio>
            </div>
          </span>


          <h4>Description</h4>
          <span>
            <textarea
              value={this.state.description}
              placeholder={ " please describe the track "}
              onChange={this.updateTrackState('description')}
              required>
            </textarea>
          </span>

          <footer className="track-create-footer">
            <br/>
            <input type="submit" />
          </footer>
        </form>
      </div>
    );
  }


  render(){
    const form = this.trackEls();
    const errors = [];
    // debugger;
    // if (this.props.errors){
    //   this.props.errors.forEach((error, idx) => {
    //     errors.push(<li key={idx}>{error}</li>);
    //   });
    // }

    return(
      <div className="track-create">
        <header className="track-create-header">
          <h2>
            Create New Track
          </h2>
        </header>
        {form}
      </div>
    );
  }
}

export default withRouter(TrackCreate);
