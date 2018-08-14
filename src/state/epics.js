import { history } from '../modules/history.js';
import { concat, of } from 'rxjs';
import { filter, concatMap, tap, mapTo } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import {
  APP_LOAD_REQUEST,
  APP_LOAD_SUCCESS,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  CONFIRM_REQUEST,
  LOADING,
  HISTORY_PUSH_REQUEST,
  HISTORY_PUSH_SUCCESS
} from './actions.js';
import { login$, currentUser$, signup$, confirm$ } from './observables.js';

var appLoadEpic = $action =>
  $action.pipe(
    filter(action => action.type === APP_LOAD_REQUEST),
    concatMap(() => concat(currentUser$(), of({ type: APP_LOAD_SUCCESS })))
  );

var historyEpic = $action =>
  $action.pipe(
    filter(action => action.type === HISTORY_PUSH_REQUEST),
    tap(action => history.push(action.payload.href)),
    mapTo({
      type: HISTORY_PUSH_SUCCESS
    })
  );

var loginEpic = $action =>
  $action.pipe(
    filter(action => action.type === LOGIN_REQUEST),
    concatMap(action => concat(of({ type: LOADING }), login$(action.payload)))
  );

var signupEpic = $action =>
  $action.pipe(
    filter(action => action.type === SIGNUP_REQUEST),
    concatMap(action => concat(of({ type: LOADING }), signup$(action.payload)))
  );

var confirmEpic = $action =>
  $action.pipe(
    filter(action => action.type === CONFIRM_REQUEST),
    concatMap(action => concat(of({ type: LOADING }), confirm$(action.payload)))
  );

export default combineEpics(
  appLoadEpic,
  loginEpic,
  historyEpic,
  signupEpic,
  confirmEpic
);
