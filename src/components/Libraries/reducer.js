import { FETCH_SUCCESS } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.libraryId]: action.payload.books
      }
    default:
      return state;
  }
};
