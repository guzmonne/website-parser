import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import { Signup as SignupComponent } from './Signup.js';

var enhance = compose(
  withFormHandlers(
    {
      email: '',
      password: '',
      repeatPassword: ''
    },
    form => console.log(form)
  )
);

export var Signup = enhance(SignupComponent);
Signup.displayName = 'enhance(Signup)';
