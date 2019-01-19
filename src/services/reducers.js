import { combineReducers } from 'redux';
import searchReducer from './search/reducer';
import favoritesReducer from './favorites/reducer';

export default combineReducers({
  search: searchReducer,
  favorite: favoritesReducer
});
