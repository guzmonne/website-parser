import { connect } from 'react-redux';
import compose from 'recompose/compose.js';
import { Body as BodyComponent } from './Body.js';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import withError from '../../../common/recompose/withError.js';
import { QUERY_REQUEST } from '../../../state/';

var enhance = compose(
  connect(
    state => ({
      loading: state.ui.loading,
      results: state.results,
      dirty: state.ui.dirty
    }),
    {
      query: url => ({
        type: QUERY_REQUEST,
        payload: url
      })
    }
  ),
  withError('query'),
  withFormHandlers(
    {
      url: ''
    },
    ({ url }, { query }) => {
      query(url);
    }
  )
);

export var Body = enhance(BodyComponent);
Body.displayName = 'enhance(Body)';
