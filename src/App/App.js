import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../common/PrivateRoute/';
import { AnonymousRoute } from '../common/AnonymousRoute/';
import { Auth } from './Auth/';
import { Main } from './Main/';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <AnonymousRoute component={Auth} path="/auth" />
            <PrivateRoute component={Main} path="/app" />
            <Redirect to="/app" />
          </Switch>
        </div>
      </Router>
    );
  }
}
