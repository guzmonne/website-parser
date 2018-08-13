import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';
import withHandlers from 'recompose/withHandlers';

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
