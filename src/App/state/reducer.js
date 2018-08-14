import { combineReducers } from 'redux';
import { PING, PONG } from './actions.js';

var ping = (state = { ping: 0, pong: 0 }, action) => {
  switch (action.type) {
    case PING:
      return {
        ...state,
        ping: state.ping + 1
      };
    case PONG:
      return {
        ...state,
        pong: state.pong + 1
      };
    default:
      return state;
  }
};

export default combineReducers({ ping });
