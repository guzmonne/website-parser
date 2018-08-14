import { filter, mapTo } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { PING, PONG } from './actions.js';

var ping = $action =>
  $action.pipe(
    filter(action => action.type === PING),
    mapTo({ type: PONG })
  );

export default combineEpics(ping);
