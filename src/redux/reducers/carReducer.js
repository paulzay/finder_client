const initialState = {
  cars: [],
  car: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        cars: action.cars,
      };
    case 'VIEW_CAR':
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
};
