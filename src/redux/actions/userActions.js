import { successToast, errorToast } from '../../utils/toastify';
import axios from 'axios';

export const loginUser = userObj => {
  return {
    type: 'LOGIN_USER',
    payload: userObj
  }
}
export const logOut = () => {
  return {
    type: 'LOGOUT_USER',
  }
}
export const logOutUser = (dispatch) => {
  axios({
    method: 'get',
    url: 'https://automobillz.herokuapp.com/logout',
  })
  .then((response) => {
    if(response.status === 200) {
      logOut();
      console.log('logging out')
    } else {
      console.log('error logging out');
    };
  });
}

export function loginUserFetch(userInfo) {
  return dispatch => fetch('https://automobillz.herokuapp.com/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        console.log(data)
        let user_json = data.user
        localStorage.setItem("token", data.jwt)
        dispatch(loginUser(user_json))
        successToast(`Welcome ${data.user.username}`);
      }
    })

}
export function signUpUser(userinfo) {
  return dispatch => fetch('https://automobillz.herokuapp.com/users/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userinfo)
  }).then(r => r.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem("token", data.jwt)
        dispatch(loginUser(data.user))
        successToast(`Welcome ${data.user.username}`);
      }
    })
}

export function fetchLoggedInUser() {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch('http://localhost:3001/auto_login', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data))
          }
        })
    }
  }
}