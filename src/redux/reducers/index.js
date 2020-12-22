import { combineReducers } from 'redux';
import cars from './carReducer';

const rootReducer = combineReducers({
  cars,
});

export default rootReducer;
