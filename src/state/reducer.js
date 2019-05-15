import { combineReducers } from 'redux';
import { actionNames } from './actions';

const hotels = (state = [], action) => {
  let bodyResponse;
  
  switch(action.type) {
    case actionNames.FETCH_SUCCESS_HOTELS:
      bodyResponse = action.data;
      break;
    case actionNames.FETCH_ERROR_HOTELS:
      bodyResponse = action.error;
      break;
    default:
      bodyResponse = state;
  }

  return bodyResponse;
}

export default combineReducers({
  hotels
});