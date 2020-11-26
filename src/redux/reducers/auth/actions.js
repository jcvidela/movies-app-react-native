import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseURL from '../../../env';
import {FETCH_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '../../types';

const loginRequest = () => ({ type: FETCH_REQUEST });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const logoutRequest = () => ({ type: LOGOUT });
const logoutSuccess = (data) => ({ type: LOGOUT_SUCCESS, payload: data });
const logoutFailure = (error) => ({ type: LOGOUT_FAILURE, payload: error });

export const login = (data) => async(dispatch) => {
  dispatch(loginRequest());

  try {
    let response = await axios.post(`${baseURL}/sign_in`, data);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());

  AsyncStorage.removeItem('token')
  .then(() => dispatch(logoutSuccess({loggued: false})))
  .catch((error) => dispatch(logoutFailure({loggued: true, error})))
};
