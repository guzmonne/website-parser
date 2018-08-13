import { Auth } from 'aws-amplify';
import compose from 'recompose/compose.js';
import { withRouter } from 'react-router-dom';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withLoading from '../../../common/recompose/withLoading.js';
import { Confirm as ConfirmComponent } from './Confirm';

var enhance = compose(
  withRouter,
  withLoading,
  withFormHandlers(
    {
      username: '',
      code: ''
    },
    (formState, { setLoading, history }) => {
      if ((formState.code === '') | (formState.username === '')) return;

      setLoading(true);

      Auth.confirmSignUp(formState.username, formState.code)
        .then(data => {
          console.log(data);
          history.push('/auth');
        })
        .then(err => {
          console.log(err);
        });
    }
  )
);

export var Confirm = enhance(ConfirmComponent);
Confirm.displayName = 'enhance(Confirm)';
