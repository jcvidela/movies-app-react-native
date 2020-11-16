import axios from 'axios';
import baseURL from '../../../env';
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../../types';

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const fetchBooks = () => dispatch => {
  dispatch(fetchRequest());
  axios
    .get(`${baseURL}/books`)
    .then((response) => dispatch(fetchSuccess(response.data)))
    .catch((error) => dispatch(fetchFailure(error.message)));
};