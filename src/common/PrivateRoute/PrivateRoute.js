import React from 'react';
import withAccount from '../recompose/withAccount.js';
import { Route, Redirect } from 'react-router-dom';

export var PrivateRoute = withAccount(
  ({ component: Component, account, ...rest }) => {
    Component.displayName = 'PrivateRoute';
    return (
      <Route
        {...rest}
        render={props =>
          account.username !== undefined ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth" />
          )
        }
      />
    );
  }
);

PrivateRoute.displayName = 'PrivateRoute';
