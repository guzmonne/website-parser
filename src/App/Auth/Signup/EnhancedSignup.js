import { Auth } from 'aws-amplify';
import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import { Signup as SignupComponent } from './Signup.js';

var enhance = compose(
  withLoading,
  withFormHandlers(
    {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    (formState, { setLoading }) => {
      if (formState.password !== formState.repeatPassword) return;

      setLoading(true);

      Auth.signUp({
        username: formState.username,
        password: formState.password,
        attributes: {
          email: formState.email
        }
      })
        .then(data => {
          console.log(data);
        })
        .then(err => {
          console.log(err);
        });
    }
  )
);

export var Signup = enhance(SignupComponent);
Signup.displayName = 'enhance(Signup)';
