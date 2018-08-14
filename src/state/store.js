import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducer.js';
import rootEpic from './epics.js';

const epicMiddleware = createEpicMiddleware();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
  var store;

  if (process.env.NODE_ENV === 'production')
    store = createStore(rootReducer, applyMiddleware(epicMiddleware));
  else
    store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(epicMiddleware))
    );

  epicMiddleware.run(rootEpic);

  return store;
}
