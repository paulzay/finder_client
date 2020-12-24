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
    .post('http://localhost:3001/login/', user)
    .then(response => {
      dispatch(loginSuccess(response.user));
      // successToast(`Welcome ${response.data.user.username}`);
      history.push('/');
    })
    .catch(error => {
      dispatch(loginFailure(error));
    });
};

export const logout = () => ({
  type: 'LOGIN_USER_LOGOUT',
});

export const logoutUser = () => dispatch => dispatch(logout());
