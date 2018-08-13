import compose from 'recompose/compose.js';
import withStateHandlers from 'recompose/withStateHandlers.js';

export default compose(
  withStateHandlers(
    ({ loading }) => ({
      loading: !!loading
    }),
    {
      setLoading: ({ loading }) => value => {
        if (value !== true && value !== false) return { loading: !loading };
        return { loading: value };
      }
    }
  )
);
