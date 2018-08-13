import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import { Login as LoginComponent } from './Login.js';

var enhance = compose(
  withRouter,
  withLoading,
  withFormHandlers(
    {
      username: '',
      password: ''
    },
    ({ username, password }, { setLoading, history }) => {
      if (username === '' || password === '') return;

      setLoading(true);

      Auth.signIn(username, password)
        .then(data => {
          console.log(data);
          history.push('/app');
        })
        .catch(err => console.error(err));
    }
  )
);

export var Login = enhance(LoginComponent);
Login.displayName = 'enhance(Login)';
