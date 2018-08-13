import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './Login/';
import { Signup } from './Signup/';

export var Auth = () => (
  <div className="Auth">
    <Switch>
      <Route exact path="/auth" component={Login} />
      <Route path="/auth/signup" component={Signup} />
    </Switch>
  </div>
);
