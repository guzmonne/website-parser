import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withError from '../../../common/recompose/withError.js';
import { Signup as SignupComponent } from './Signup.js';
import withProps from 'recompose/withProps';
import { SIGNUP_REQUEST } from '../../../state/';

var enhance = compose(
  withError('signup'),
  connect(
    state => ({
      loading: state.ui.loading
    }),
    {
      signup: payload => ({
        type: SIGNUP_REQUEST,
        payload
      })
    }
  ),
  withProps(({ signup, awkError }) => ({
    signup: payload => {
      awkError('signup');
      signup(payload);
    }
  })),
  withFormHandlers(
    {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    (formState, { signup }) => {
      if (formState.password !== formState.repeatPassword) return;
      signup(formState);
    }
  )
);

export var Signup = enhance(SignupComponent);
Signup.displayName = 'enhance(Signup)';
