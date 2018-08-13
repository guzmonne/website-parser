import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import { Login as LoginComponent } from './Login.js';

var enhance = compose(
  withFormHandlers(
    {
      email: '',
      password: ''
    },
    form => console.log(form)
  ),
  withLoading
);

export var Login = enhance(LoginComponent);
Login.displayName = 'enhance(Login)';
