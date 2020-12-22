import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from './actionTypes';
import axios from 'axios';

export const getCars = () => {
  return dispatch => {
    axios.get('http://localhost:3001/cars', { mode: 'cors' })
      .then(res => {
        const cars = res.data;
        dispatch({ 
          type: FETCH_ALL, 
          cars 
        });
      })
  };
};
