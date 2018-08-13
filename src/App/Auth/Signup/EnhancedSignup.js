import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import { Signup as SignupComponent } from './Signup.js';

var enhance = compose(
  withFormHandlers(
    {
      email: '',
      password: '',
      repeatPassword: ''
    },
    form => console.log(form)
  ),
  withLoading
);

export var Signup = enhance(SignupComponent);
Signup.displayName = 'enhance(Signup)';
