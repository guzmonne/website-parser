import React from 'react';
import withAccount from '../recompose/withAccount.js';
import { Route, Redirect } from 'react-router-dom';

export var AnonymousRoute = withAccount(
  ({ component: Component, account, ...rest }) => {
    Component.displayName = 'AnonymousRoute';
    return (
      <Route
        {...rest}
        render={props =>
          account.username === undefined ? (
            <Component {...props} />
          ) : (
            <Redirect to="/app" />
          )
        }
      />
    );
  }
);
