import {
  PDP_SET_PRODUCT_ID,
  PDP_CHANGE_BACKGROUND_COLOR,
  PDP_FETCH_PRODUCT_DETAILS_SUCCESS,
  PDP_FETCH_JAVASCRIPT_NEWS_SUCCESS,
} from '../actions';


const initialState = {
  productId: null,
  backgroundColor: '#fff',
  details: {},
  javascriptNews: [],
};


export default {
  pdp: function todos(state = initialState, {type, payload}) {
    switch (type) {

      case PDP_SET_PRODUCT_ID:
        return Object.assign({}, state, { productId: payload.productId });

      case PDP_CHANGE_BACKGROUND_COLOR:
        return Object.assign({}, state, { backgroundColor: payload.backgroundColor });

      case PDP_FETCH_PRODUCT_DETAILS_SUCCESS:
        return Object.assign({}, state, { details: payload.product });

      case PDP_FETCH_JAVASCRIPT_NEWS_SUCCESS:
        return Object.assign({}, state, { javascriptNews: payload });

      default:
        return state;
    }
  }
};
