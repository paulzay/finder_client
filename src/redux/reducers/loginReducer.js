const initialState = {
    isLoggedIn: false, 
    user: {},
    error: {},
    isLoading: false,
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isLoading: true,
            };

        case 'LOGIN_USER_SUCCESS': {
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                user: action.response,
            };
        }


        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                error: action.error.response,
                isError: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return { ...state };
    }
};

export default login;
