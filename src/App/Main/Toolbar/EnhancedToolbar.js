import { Auth } from 'aws-amplify';
import compose from 'recompose/compose.js';
import withHandlers from 'recompose/withHandlers.js';
import { Toolbar as ToolbarComponent } from './Toolbar';

var enhance = compose(
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
