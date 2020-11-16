import {FETCH_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../../types';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        loading: false,
        isLoggedIn: false,
        error: '',
      };
    
    default:
      return state;
  }
};