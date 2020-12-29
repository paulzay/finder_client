import { combineReducers } from 'redux';
import cars from './carReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  cars,
  user: userReducer,
});

export default rootReducer;
