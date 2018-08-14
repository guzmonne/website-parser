import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps.js';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withError from '../../../common/recompose/withError.js';
import { Login as LoginComponent } from './Login.js';
import { LOGIN_REQUEST } from '../../../state/';

var enhance = compose(
  withRouter,
  withError('login'),
  connect(
    state => ({
      loading: state.ui.loading
    }),
    {
      login: payload => ({
        type: LOGIN_REQUEST,
        payload
      })
    }
  ),
  withProps(({ login, awkError }) => ({
    login: payload => {
      awkError('login');
      login(payload);
    }
  })),
  withFormHandlers(
    {
      username: '',
      password: ''
    },
    ({ username, password }, { login }) => {
      if (username === '' || password === '') return;
      login({ username, password });
    }
  )
);

export var Login = enhance(LoginComponent);
Login.displayName = 'enhance(Login)';
