/* eslint-disable */
import axios from 'axios';
import { successToast, errorToast } from '../../utils/toastify';

export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});
export const logOut = () => ({
  type: 'LOGOUT_USER',
});
export const logOutUser = () => {
  axios({
    method: 'get',
    url: 'https://automobillz.herokuapp.com/logout',
  })
    .then(response => {
      if (response.status === 200) {
        logOut();
      }
    });
};

export function loginUserFetch(userInfo) {
  return dispatch => fetch('https://automobillz.herokuapp.com/login', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        errorToast(data.error);
      } else {
        const user_json = data.user;
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(user_json));
        successToast(`Welcome ${data.user.username}`);
      }
    });
}
export function signUpUser(userinfo) {
  return dispatch => fetch('https://automobillz.herokuapp.com/users/', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userinfo),
  }).then(r => r.json())
    .then(data => {
      if (data.error) {
        errorToast(data.error);
      } else {
        localStorage.setItem('token', data.jwt);
        dispatch(loginUser(data.user));
        successToast(`Welcome ${data.user.username}`);
      }
    });
}

export function fetchLoggedInUser() {
  return dispatch => {
    const { token } = localStorage;
    if (token) {
      return fetch('https://automobillz.herokuapp.com/auto_login', {
        method: 'GET',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            errorToast(data.error);
            localStorage.removeItem('token');
          } else {
            dispatch(loginUser(data));
          }
        });
    }
  };
}

export const getCars = () => dispatch => {
  axios.get('https://automobillz.herokuapp.com/cars', { mode: 'cors' })
    .then(res => {
      const cars = res.data;
      dispatch({
        type: 'FETCH_ALL',
        cars,
      });
    });
};

export function getCar(id) {
  return dispatch => {
    axios.get(`https://automobillz.herokuapp.com/cars/${id}`, { mode: 'cors' })
      .then(res => {
        const car = res.data;
        dispatch({
          type: 'VIEW_CAR',
          car,
        });
      });
  };
}
