import { combineReducers } from 'redux';
import cars from './carReducer';
import userReducer from './userReducer';
import car from './oneCarReducer';

const rootReducer = combineReducers({
  cars,
  user: userReducer,
  car,
});

export default rootReducer;
