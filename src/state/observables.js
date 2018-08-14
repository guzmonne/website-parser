import { Auth } from 'aws-amplify';
import { of, from } from 'rxjs';
import { concatMap, catchError } from 'rxjs/operators';
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  CONFIRM_SUCCESS,
  ERROR,
  HISTORY_PUSH_REQUEST,
  CURRENT_USER_SUCCESS
} from './actions.js';

var handleError$ = key =>
  catchError(error =>
    of({
      type: ERROR,
      payload: {
        key,
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
    handleError$('login')
  );
};

export var signup$ = ({ username, password, email }) => {
  return from(
    Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
  ).pipe(
    concatMap(data =>
      from([
        {
          type: SIGNUP_SUCCESS,
          payload: data
        },
        {
          type: HISTORY_PUSH_REQUEST,
          payload: {
            href: '/auth/confirm'
          }
        }
      ])
    ),
    handleError$('signup')
  );
};

export var confirm$ = ({ username, code }) => {
  return from(Auth.confirmSignUp(username, code)).pipe(
    concatMap(data =>
      from([
        {
          type: CONFIRM_SUCCESS,
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
    handleError$('confirmUser')
  );
};
