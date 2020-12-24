const initialState = {
  isLoading: false,
  message: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return {
        ...state,
        isLoading: true,
      };
    case 'SIGNUP_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        message: action.response,
        error: {},
      };
    case 'SIGNUP_USER_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error.response.data,
      };
    default:
      return { ...state };
  }
};
