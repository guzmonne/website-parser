import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';
import withHandlers from 'recompose/withHandlers';

export default function withFormHandlers(initialState, onSubmit) {
  return compose(
    withStateHandlers(() => ({ formState: initialState }), {
      setFormState: ({ formState }) => (key, value) => ({
        formState: {
          ...formState,
          [key]: value
        }
      })
    }),
    withHandlers({
      handleChange: ({ setFormState }) => key => e =>
        setFormState(key, e.target.value),
      handleSubmit: ({ formState, ...props }) => e => {
        e.preventDefault();
        onSubmit(formState, props);
      }
    })
  );
}
