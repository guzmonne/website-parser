import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { history } from '../modules/history.js';
import { PrivateRoute } from '../common/PrivateRoute/';
import { AnonymousRoute } from '../common/AnonymousRoute/';
import { Loading } from '../common/Loading/';
import { Auth } from './Auth/';
import { Main } from './Main/';

export class App extends React.Component {
  componentWillMount() {
    this.props.load();
  }

  render() {
    if (this.props.app.ready === false) return <Loading />;

    return (
      <Router history={history}>
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
