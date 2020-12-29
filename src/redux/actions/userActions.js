import { successToast, errorToast } from '../../utils/toastify';
   
export const loginUser = userObj => {
  return {
    type: 'LOGIN_USER',
    payload: userObj
  }
}

export const logOutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
export function loginUserFetch(userInfo) {
  return dispatch => fetch('http://localhost:3001/login', {
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
  return dispatch => fetch('http://localhost:3001/users/', {
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