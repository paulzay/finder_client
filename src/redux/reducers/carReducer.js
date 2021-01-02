const initialState = {
  cars: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        cars: action.cars,
      };
    default:
      return state;
  }
};
