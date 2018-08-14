import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from './modules/history.js';
import { configureStore } from './state/';
import { PrivateRoute } from '../common/PrivateRoute/';
import { AnonymousRoute } from '../common/AnonymousRoute/';
import { Auth } from './Auth/';
import { Main } from './Main/';

export class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <div className="App">
            <Switch>
              <AnonymousRoute component={Auth} path="/auth" />
              <PrivateRoute component={Main} path="/app" />
              <Redirect to="/app" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
