import { Auth } from 'aws-amplify';
import compose from 'recompose/compose.js';
import withStateHandlers from 'recompose/withStateHandlers.js';
import withHandlers from 'recompose/withHandlers.js';
import withAccount from '../../../common/recompose/withAccount.js';
import { Toolbar as ToolbarComponent } from './Toolbar';

var enhance = compose(
  withAccount,
  withStateHandlers(
    ({ account }) => ({
      label: account.username
    }),
    {
      toggleLabel: ({ label }, { account }) => () => ({
        label: label === account.username ? 'Sign Out' : account.username
      })
    }
  ),
  withHandlers({
    onSignOut: () => () => {
      Auth.signOut()
        .then(data => {
          console.log(data);
          window.location.reload();
        })
        .catch(err => console.error(err));
    }
  })
);

export var Toolbar = enhance(ToolbarComponent);
Toolbar.displayName = 'enhance(Toolbar)';
