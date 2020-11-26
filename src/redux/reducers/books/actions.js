import axios from 'axios';
import baseURL from '../../../env';
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../../types';

const fetchRequest = () => ({type: FETCH_REQUEST});
const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data, });
const fetchFailure = (error) => ({ type: FETCH_FAILURE, payload: error });

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchRequest());

  try {
    let response = await axios.get(`${baseURL}/books`);
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
