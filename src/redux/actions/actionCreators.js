/* eslint-disable camelcase */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from '../../helpers/index';

toast.configure();

export const logout = () => ({
  type: 'LOGOUT',
});
export const logOutUser = () => dispatch => dispatch(logout());

export const signup = (username, email, password, password_confirmation) => axios
  .post('https://automobillz.herokuapp.com/users', {
    username,
    email,
    password,
    password_confirmation,
  })
  .then(response => {
    if (response.data.jwt) {
      localStorage.setItem('token', response.data.jwt);
    }
    history.push('/login');
    window.location.reload();
    toast.success(`Welcome ${response.data.user.username} please sign in`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      hideProgressBar: true,
      pauseOnHover: true,
    });
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
      toast.success(`Welcome ${response.data.user.username}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    } else {
      toast.error(response.data.error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    }
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

export const AddTofavourite = CarId => {
  const token = localStorage.getItem('token');
  axios.post('https://automobillz.herokuapp.com/favorites', {
    car_id: CarId,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    if (res.data.error) {
      toast.info(res.data.error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    } else {
      toast.success('Added to favorites', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
      });
    }
  });
};
