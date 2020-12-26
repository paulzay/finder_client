import axios from 'axios';

export const loginSuccess = response => ({
  type: 'LOGIN_USER_SUCCESS',
  response,
});
export const loginFailure = error => ({
  type: 'LOGIN_USER_FAILURE',
  error,
});
export const loginUser = (user, history) => dispatch => {
  dispatch({ type: 'LOGIN_USER' });
  return axios
    .post('http://localhost:3001/login/', user, {withCredentials: true})
    .then(response => {
      dispatch(loginSuccess(response.user));
      localStorage.setItem("user", JSON.stringify(response.data.user.username));
      history.push('/');
    })
    .catch(error => {
      dispatch(loginFailure(error));
    });
};

export const logout = (response) => ({
  type: 'LOGOUT',
  response,
});

export const logoutUser = (user) => dispatch => {
  return axios
    .get('http://localhost:3001/logged_in/', user, {withCredentials: true})
    .then(response => {
        if (response.data.logged_in) {
          dispatch(logout())
          // this.handleLogin(response)
          console.log('logged out')
          console.log(response.data)
        } 
    })
};

export const signupSuccess = response => ({
  type: 'SIGNUP_SUCCESS',
  response,
});

export const signupFailure = error => ({
  type: 'SIGNUP_FAILURE',
  error,
});

export const signUpUser = user => async dispatch => {
  dispatch({ type: 'SIGNUP_USER' });
  return axios
    .post('http://localhost:3001/users', user, {withCredentials: true})
    .then(response => {
      dispatch(signupSuccess(response.user));
      
    })
    .catch(error => {
      dispatch(signupFailure(error));
    });
};
