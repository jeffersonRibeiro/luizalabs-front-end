import { FETCH_CEP } from './actionTypes';

const initialState = {
  result: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CEP:
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
}
