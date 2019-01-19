import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes';

const initialState = {
  places: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        places: addFavorite(state.places, action.payload)
      };
    default:
      return state;
  }
}

function addFavorite(places, newPlace) {
  const found = places.filter(p => p.zipCode === newPlace.zipCode);
  if (!found.length) {
    return [...places, newPlace];
  } else {
    return places;
  }
}
