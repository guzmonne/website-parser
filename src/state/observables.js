import { Auth } from 'aws-amplify';
import { of, from } from 'rxjs';
import { concatMap, catchError } from 'rxjs/operators';
import {
  LOGIN_SUCCESS,
  ERROR,
  HISTORY_PUSH_REQUEST,
  CURRENT_USER_SUCCESS
} from './actions.js';

var handleError$ = () =>
  catchError(error =>
    of({
      type: ERROR,
      payload: {
        key: 'login',
        value: error
      }
    })
  );

export var currentUser$ = () => {
  return from(Auth.currentAuthenticatedUser()).pipe(
    concatMap(data =>
      from([
        {
          type: CURRENT_USER_SUCCESS,
          payload: data
        }
      ])
    ),
    handleError$()
  );
};

export var login$ = ({ username, password }) => {
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
    handleError$()
  );
};
