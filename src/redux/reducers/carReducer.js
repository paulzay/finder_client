import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actions/actionTypes';

const initialState = {
  cars: [],
  car: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        cars: action.cars,
      };
    default:
      return state;
  }
};

