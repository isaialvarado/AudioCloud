import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_TEXT = 'RECEIVE_SEARCH_TEXT';

export const receiveSearchText = searchText => ({
  type: RECEIVE_SEARCH_TEXT,
  searchText
});

export const receiveSearchResults = tracks => ({
  type: RECEIVE_SEARCH_RESULTS,
  tracks
});

export const receiveSearch = keywords => dispatch => (
  dispatch(receiveSearchText(keywords))
);

export const fetchSearchResults = searchData => dispatch => (
  SearchAPIUtil.fetchSearchResults(searchData)
    .then(tracks => dispatch(receiveSearchResults(tracks)))
);
