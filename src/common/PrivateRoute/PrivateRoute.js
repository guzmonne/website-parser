import React from 'react';
import { Auth } from 'aws-amplify';
import { Route, Redirect } from 'react-router-dom';

export var PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.currentSession() !== undefined ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    }
  />
);
