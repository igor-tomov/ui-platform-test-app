import {
  PDP_ENABLE_BACKGROUND_COLOR_CHANGING,
  PDP_FETCH_PRODUCT_DETAILS,
  changeBackgroundColor,
  fillProductDetails,
} from '../actions';



const changeColorEpic = action$ =>
  action$.ofType(PDP_ENABLE_BACKGROUND_COLOR_CHANGING)
    .delay(2000)
    .mapTo(changeBackgroundColor('#ffccee'));


// fetch product data
const fetchProductDetails = (action$, store, { productDataService }) =>
  action$
    .ofType(PDP_FETCH_PRODUCT_DETAILS)
    .mergeMap(
      () => productDataService.fetchSampleProduct().then(data => fillProductDetails(data))
    );


fetchProductDetails.$inject = ['productDataService'];


export default [ changeColorEpic, fetchProductDetails ];
