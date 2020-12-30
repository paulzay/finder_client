import axios from 'axios';

export const getCars = () => {
  return dispatch => {
    axios.get('http://localhost:3001/cars', { mode: 'cors' })
      .then(res => {
        const cars = res.data;
        dispatch({
          type: 'FETCH_ALL',
          cars
        });
      })
  };
};

export function getCar(id) {
  return dispatch => {
    axios.get(`http://localhost:3001/cars/${id}`, { mode: 'cors' })
      .then(res => {
        const car = res.data;
        dispatch({
          type: 'VIEW_CAR',
          car
        });
      });
  };
}
