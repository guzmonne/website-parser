import { combineReducers } from 'redux';
import {
  APP_LOAD_SUCCESS,
  CURRENT_USER_SUCCESS,
  LOADING,
  HISTORY_PUSH_REQUEST,
  AWK_ERROR,
  LOGIN_SUCCESS,
  QUERY_REQUEST,
  QUERY_SUCCESS,
  ERROR
} from './actions.js';

var defaultState = {
  app: {
    ready: false
  },
  ui: {
    loading: false,
    dirty: false
  },
  errors: {
    login: undefined
  },
  account: {},
  results: {}
};

var app = (state = defaultState.app, action) => {
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
    case HISTORY_PUSH_REQUEST:
      return {
        ...state,
        loading: !state.loading
      };
    case ERROR:
      return {
        ...state,
        loading: false
      };
    case QUERY_REQUEST:
      return {
        ...state,
        dirty: true
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

var results = (state = defaultState.results, action) => {
  if (action.type === QUERY_REQUEST) return {};

  if (action.type === QUERY_SUCCESS) return { ...action.payload };

  return state;
};

export default combineReducers({ app, account, errors, ui, results });
