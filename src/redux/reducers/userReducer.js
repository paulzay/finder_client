const userReducer = ( state = {user: {}, isLoggedIn: false}, action ) => {

    switch(action.type){

        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case "LOGOUT_USER":
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default userReducer