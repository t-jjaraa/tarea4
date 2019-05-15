import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const INITIAL_STATE = {
  hotels: []
};

export default createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));