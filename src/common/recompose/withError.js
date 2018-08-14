import get from 'lodash/get.js';
import { connect } from 'react-redux';
import { AWK_ERROR, ERROR } from '../../state/';

export default function(key) {
  return connect(
    state => ({
      error: get(state, `errors.${key}.message`)
    }),
    {
      awkError: () => ({
        type: AWK_ERROR,
        payload: {
          key
        }
      }),
      setError: payload => ({
        type: ERROR,
        payload
      })
    }
  );
}
