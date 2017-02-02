import { connect } from 'react-redux';
import { fetchSearchResults, receiveSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  receiveSearch: keywords => dispatch(receiveSearch(keywords)),
  fetchSearchResults: keywords => dispatch(fetchSearchResults(keywords))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
