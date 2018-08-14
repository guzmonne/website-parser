import compose from 'recompose/compose.js';
import { Body as BodyComponent } from './Body.js';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';

var enhance = compose(
  withFormHandlers(
    {
      url: ''
    },
    ({ url }) => {
      console.log(url);
    }
  )
);

export var Body = enhance(BodyComponent);
Body.displayName = 'enhance(Body)';
