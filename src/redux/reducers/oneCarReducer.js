const initialState = {
  car: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_CAR':
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
};
