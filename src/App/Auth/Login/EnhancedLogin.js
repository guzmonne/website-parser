import compose from 'recompose/compose.js';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import { Login as LoginComponent } from './Login.js';

var enhance = compose(
  withFormHandlers(
    {
      email: '',
      password: ''
    },
    form => console.log(form)
  )
);

export var Login = enhance(LoginComponent);
Login.displayName = 'enhance(Login)';
