import { connect } from 'react-redux';
import { APP_LOAD_REQUEST } from '../../state/';

export default connect(
  state => ({
    app: state.app
  }),
  {
    load: () => ({
      type: APP_LOAD_REQUEST
    })
  }
);
