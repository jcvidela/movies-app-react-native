import axios from 'axios';
import baseURL from '../../../env';
import {FETCH_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../../types';

export const loginRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logoutRequest = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(`${baseURL}/sign_in`, data)
    .then((response) => dispatch(loginSuccess(response.data)))
    .catch((error) => dispatch(loginFailure(error.message)));
};
