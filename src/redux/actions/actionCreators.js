/* eslint-disable */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export const logOutUser = () => {
  localStorage.removeItem('token');
};

export const signup = (username, email, password, password_confirmation) => axios
  .post('https://automobillz.herokuapp.com/users', {
    username,
    email,
    password,
    password_confirmation 
  })
    .then(response => {
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
    }
    toast.success(`Welcome ${response.data.user.username}`,{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      pauseOnHover: true,
    })
    return response.data;
  });
  
export const signin = (username, email, password) => axios
  .post('https://automobillz.herokuapp.com/login', {
    username,
    email,
    password,
  })
  .then(response => {
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
    }
    toast.success(`Welcome ${response.data.user.username}`,{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      pauseOnHover: true,
    })
    return response.data;
  });

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

const token = localStorage.getItem('token');
export const getfaves = () => axios.get('https://automobillz.herokuapp.com/favorites', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const mycars = (id) => {
  axios.get(`https://automobillz.herokuapp.com/cars/${id}`)
}