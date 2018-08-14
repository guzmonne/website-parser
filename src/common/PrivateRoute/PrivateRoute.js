import React from 'react';
import withAccount from '../recompose/withAccount.js';
import { Route, Redirect } from 'react-router-dom';

export var PrivateRoute = withAccount(
  ({ component: Component, account, ...rest }) => (
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
  )
);
