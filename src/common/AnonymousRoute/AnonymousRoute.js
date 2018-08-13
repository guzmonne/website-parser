import React from 'react';
import { Auth } from 'aws-amplify';
import { Route, Redirect } from 'react-router-dom';
import { Loading } from '../Loading/';

export class AnonymousRoute extends React.Component {
  state = {
    user: undefined,
    isFetching: true
  };

  componentWillMount() {
    Auth.currentAuthenticatedUser()
      .then(data => {
        console.log(data);
        this.setState({ isFetching: false, user: true });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isFetching: false });
      });
  }

  render() {
    var { component: Component, ...rest } = this.props;
    var { isFetching, user } = this.state;

    return (
      <Route
        {...rest}
        render={props => {
          if (isFetching === true) return <Loading />;

          return user === undefined ? (
            <Component {...props} />
          ) : (
            <Redirect to="/app" />
          );
        }}
      />
    );
  }
}
