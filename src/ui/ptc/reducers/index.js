import { PING_ACTION_TYPE, PONG_ACTION_TYPE } from '../actions';

export default {
  checkout(state = {}, {type, payload}) {
    switch (type) {
      case 'CHECKOUT_SET_STATE':
        return Object.assign({}, payload);
      default:
        return state;
    }
  },
  ping(state = { isPinging: false }, action) {
    switch (action.type) {
      case PING_ACTION_TYPE:
        return { isPinging: true };

      case PONG_ACTION_TYPE:
        return { isPinging: false };

      default:
        return state;
    }
  }
};
