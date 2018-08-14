import React from 'react';
import ReactDOM from 'react-dom';

import './bootstrap-reboot.css';
import './index.css';

import './amplify.js';
import { Provider } from 'react-redux';
import { configureStore } from './state/';
import { App } from './App/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
