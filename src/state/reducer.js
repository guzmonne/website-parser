import { combineReducers } from 'redux';
import {
  APP_LOAD_SUCCESS,
  CURRENT_USER_SUCCESS,
  LOADING,
  AWK_ERROR,
  LOGIN_SUCCESS,
  ERROR
} from './actions.js';

var defaultState = {
  app: {
    ready: false
  },
  ui: {
    loading: false
  },
  errors: {
    login: undefined
  },
  account: {}
};

var app = (state = defaultState.app, action) => {
  console.log(action.type, state);

  if (action.type === APP_LOAD_SUCCESS) return { ...state, ready: true };

  return state;
};

var errors = (state = defaultState.errors, action) => {
  switch (action.type) {
    case AWK_ERROR:
      return {
        ...state,
        [action.payload.key]: undefined
      };
    case ERROR:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

var ui = (state = defaultState.ui, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

var account = (state = defaultState.account, action) => {
  if (action.type === LOGIN_SUCCESS || action.type === CURRENT_USER_SUCCESS)
    return { ...action.payload };

  return state;
};

export default combineReducers({ app, account, errors, ui });
