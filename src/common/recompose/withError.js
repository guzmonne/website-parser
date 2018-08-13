import compose from 'recompose/compose.js';
import withStateHandlers from 'recompose/withStateHandlers.js';

export default compose(
  withStateHandlers(
    () => ({
      error: undefined
    }),
    {
      setError: () => error => {
        console.error(error);
        if (typeof error === 'string') return { error };
        if (error && error.message) return { error: error.message };
        return { error: undefined };
      },
      awkError: () => () => ({ error: undefined })
    }
  )
);
