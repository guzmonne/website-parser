import { Auth } from 'aws-amplify';
import { history } from '../modules/history.js';
import { concat, of, from } from 'rxjs';
import { filter, concatMap, tap, catchError, mapTo } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ERROR,
  LOADING,
  HISTORY_PUSH_REQUEST,
  HISTORY_PUSH_SUCCESS
} from './actions.js';

var login$ = ({ username, password }) => {
  return from(Auth.signIn(username, password)).pipe(
    concatMap(data =>
      from([
        {
          type: LOGIN_SUCCESS,
          payload: data
        },
        {
          type: HISTORY_PUSH_REQUEST,
          payload: {
            href: '/app'
          }
        }
      ])
    ),
    catchError(error =>
      of({
        type: ERROR,
        payload: {
          key: 'login',
          value: error
        }
      })
    )
  );
};

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
    concatMap(action => concat(of({ type: LOADING }), login$(action.payload))),
    tap(action => console.log(action))
  );

export default combineEpics(loginEpic, historyEpic);
