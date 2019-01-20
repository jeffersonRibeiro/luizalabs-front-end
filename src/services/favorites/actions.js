import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes';

export const addFavorite = places => ({
  type: ADD_FAVORITE,
  payload: places
});

export const removeFavorite = places => ({
  type: REMOVE_FAVORITE,
  payload: places
});
