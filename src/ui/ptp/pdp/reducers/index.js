import { PDP_SET_PRODUCT_ID, PDP_CHANGE_BACKGROUND_COLOR } from '../actions';


const initialState = {
  productId: null,
  backgroundColor: '#fff',
};


export default {
  pdp: function todos(state = initialState, {type, payload}) {
    switch (type) {

      case PDP_SET_PRODUCT_ID:
        return Object.assign({}, state, { productId: payload.productId });

      case PDP_CHANGE_BACKGROUND_COLOR:
        return Object.assign({}, state, { backgroundColor: payload.backgroundColor });

      default:
        return state;
    }
  }
};
