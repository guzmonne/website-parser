import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../common/PrivateRoute/';
import { Auth } from './Auth/';
import { Main } from './Main/';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route component={Auth} path="/auth" />
          <PrivateRoute component={Main} path="/" />
        </div>
      </Router>
    );
  }
}
