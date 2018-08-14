import { connect } from 'react-redux';
import compose from 'recompose/compose.js';
import withProps from 'recompose/withProps';
import withError from '../../../common/recompose/withError.js';
import withFormHandlers from '../../../common/recompose/withFormHandlers.js';
import { Confirm as ConfirmComponent } from './Confirm';
import { CONFIRM_REQUEST } from '../../../state/';

var enhance = compose(
  withError('confirmUser'),
  connect(
    state => ({
      loading: state.ui.loading
    }),
    {
      confirmUser: payload => ({
        type: CONFIRM_REQUEST,
        payload
      })
    }
  ),
  withProps(({ confirmUser, awkError }) => ({
    confirmUser: payload => {
      awkError('confirmUser');
      confirmUser(payload);
    }
  })),
  withFormHandlers(
    {
      username: '',
      code: ''
    },
    (formState, { confirmUser }) => {
      if ((formState.code === '') | (formState.username === '')) return;
      confirmUser(formState);
    }
  )
);

export var Confirm = enhance(ConfirmComponent);
Confirm.displayName = 'enhance(Confirm)';
