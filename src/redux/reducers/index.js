import { combineReducers } from 'redux';
import cars from './carReducer';
import car from './oneCarReducer';
import auth from './auth';
import message from './messageReducer';

const rootReducer = combineReducers({
  cars,
  auth,
  message,
  car,
});

export default rootReducer;
