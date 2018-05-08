import { PING_ACTION_TYPE, pong} from '../actions';

const pingEpic = action$ =>
  action$.ofType(PING_ACTION_TYPE)
    .delay(1000)
    .mapTo(pong());

export default [ pingEpic ];
