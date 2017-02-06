import React from 'react';
import TracksIndexItem from './tracks_index_item';
import SearchContainer from '../search/search_container';

class TracksIndex extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.fetchTracks();
    }
    this.props.clearDetail();
  }

  componentWillReceiveProps(newProps) {
    const oldPath = this.props.location.pathname;
    const newPath = newProps.location.pathname;
    const newUser = (this.props.currentUserId !== newProps.currentUserId);

    if (oldPath !== '/search' && newPath === '/search') {
      this.props.fetchSearchResults(newProps.search);
    }
    if ((oldPath === '/search' && newPath === '/') || (newUser && newPath === '/')) {
      this.props.fetchTracks();
    }
  }

  render () {
    const tracks = this.props.tracks.map(track => (
      <TracksIndexItem track={track} key={track.pk} />
    ));

    // const tracks = [];
    // for(let i = 0; i < 20; i++){
    //   let track = {pk: (i + 1), title: "test"};
    //   tracks.push(<TracksIndexItem key={track.pk} track={track}/>);
    // }

    let searchResultsText;
    if (this.props.location.pathname === '/search') {
      if (this.props.search) {
        searchResultsText = "Showing results for '" + this.props.search + "'";
      } else {
        searchResultsText = "Showing results for ''";
      }
    } else {
      searchResultsText = null;
    }

    return (
      <div>
        <SearchContainer currentUser={this.props.currentUserId}/>
        <h1 className="search-result-text">{searchResultsText}</h1>
        <div className="all-tracks">{tracks}</div>
      </div>
    );
  }
}

export default TracksIndex;
