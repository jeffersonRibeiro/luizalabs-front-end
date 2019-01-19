import { ADD_FAVORITE } from './actionTypes';

export const addFavorite = places => ({
  type: ADD_FAVORITE,
  payload: places
});
