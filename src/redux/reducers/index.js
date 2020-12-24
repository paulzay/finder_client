import { combineReducers } from 'redux';
import cars from './carReducer';
import login from './loginReducer';
import signup from './signupReducer';

const rootReducer = combineReducers({
  cars,
  login,
  signup,
});

export default rootReducer;
