import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../../types';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    
    default:
      return state;
  }
};