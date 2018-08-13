import React from 'react';
import ReactDOM from 'react-dom';

import './bootstrap-reboot.css';
import './index.css';

import './amplify.js';
import { App } from './App/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();