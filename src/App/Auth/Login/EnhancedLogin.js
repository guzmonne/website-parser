import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import withError from '../../../common/recompose/withError.js';
import { Login as LoginComponent } from './Login.js';

var enhance = compose(
  withRouter,
  withLoading,
  withError,
  withFormHandlers(
    {
      username: '',
      password: ''
    },
    ({ username, password }, { setLoading, setError, history, awkError }) => {
      if (username === '' || password === '') return;

      setLoading(true);
      awkError();

      Auth.signIn(username, password)
        .then(data => {
          console.log(data);
          history.push('/app');
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  )
);

export var Login = enhance(LoginComponent);
Login.displayName = 'enhance(Login)';
