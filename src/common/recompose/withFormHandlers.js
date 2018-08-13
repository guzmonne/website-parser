import compose from 'recompose/compose.js';
import withStateHandlers from 'recompose/withStateHandlers.js';
import withHandlers from 'recompose/withHandlers.js';

export default function withFormHandlers(initialState, onSubmit) {
  return compose(
    withStateHandlers(() => ({ state: initialState }), {
      setState: ({ state }) => (key, value) => ({
        state: {
          ...state,
          [key]: value
        }
      })
    }),
    withHandlers({
      handleChange: ({ setState }) => key => e => setState(key, e.target.value),
      handleSubmit: ({ state }) => () => onSubmit(state)
    })
  );
}
