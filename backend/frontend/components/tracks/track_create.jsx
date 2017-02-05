import React from 'react';
import { Link, withRouter } from 'react-router';

class TrackCreate extends React.Component {
  // debugger;
  constructor(props){
    super(props);
    this.state = {
      title:"",
      artist:"",
      image_url:"",
      audio_url:"",
      description:"",
      user_id: 1
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
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({
        image_url: fileReader.result
      });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateAudioFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({
        audio_url: fileReader.result
      });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[artist]", this.state.artist);
    formData.append("track[image_url]", this.state.image_url);
    formData.append("track[audio_url]", this.state.audio_url);
    formData.append("track[description]", this.state.description);
    formData.append("track[user_id]", 1);

    const track = Object.assign({}, this.state);
    this.props.createTrack(formData).then(
      (track) => this.props.router.push('/')
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

        <form className="track-create-form">
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
                type="file"
                onChange={this.updateImageFile}
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
                type="file"
                onChange={this.updateAudioFile}
                required>
              </input>

              <audio
                controls preload="auto"
                src={this.state.audio_url}>
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
        </form>
      </div>
    );
  }


  render(){
    const formFieldsEls = this.trackEls();
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

        {formFieldsEls}

        <footer className="track-create-footer">
          <br/>
          <button
            onClick={this.handleSubmit}>
            Submit
          </button>

          <ul>
            { errors }
          </ul>
        </footer>
      </div>
    );
  }
}

export default withRouter(TrackCreate);
