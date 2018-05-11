export default {
  pdp: function todos(state = {}, {type, payload}) {
    switch (type) {

      case 'PDP_SET_STATE':
        return Object.assign(state, payload);

      case 'PDP_TITLE':
        return Object.assign(state, payload);

      default:
        return state;
    }
  }
};
