/* eslint-disable */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

export default function (state = { user: {}, isLoggedIn: false}, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
