import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export var PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false ? <Component {...props} /> : <Redirect to="/auth" />
    }
  />
);
