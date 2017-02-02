import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import tracksReducer from './tracks_reducer';
import trackDetailReducer from './track_detail_reducer';
import searchReducer from './search_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  tracks: tracksReducer,
  trackDetail: trackDetailReducer,
  search: searchReducer
});

export default rootReducer;
