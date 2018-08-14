import { connect } from 'react-redux';

export default connect(
  state => ({
    account: state.account
  }),
  {}
);
