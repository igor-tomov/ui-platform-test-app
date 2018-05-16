export const PDP_SET_STATE = 'PDP_SET_STATE';
export const PDP_SET_PRODUCT_ID = 'PDP_SET_PRODUCT_ID';
export const PDP_ENABLE_BACKGROUND_COLOR_CHANGING = 'PDP_ENABLE_BACKGROUND_COLOR_CHANGING';
export const PDP_CHANGE_BACKGROUND_COLOR = 'PDP_CHANGE_BACKGROUND_COLOR';
export const PDP_FETCH_PRODUCT_DETAILS = 'PDP_FETCH_PRODUCT_DETAILS';
export const PDP_FETCH_PRODUCT_DETAILS_SUCCESS = 'PDP_FETCH_PRODUCT_DETAILS_SUCCESS';
export const PDP_FETCH_PRODUCT_DETAILS_FAILURE = 'PDP_FETCH_PRODUCT_DETAILS_FAILURE';

export const PDP_FETCH_JAVASCRIPT_NEWS          = 'PDP_FETCH_JAVASCRIPT_NEWS';
export const PDP_FETCH_JAVASCRIPT_NEWS_SUCCESS  = 'PDP_FETCH_JAVASCRIPT_NEWS_SUCCESS';
export const PDP_FETCH_JAVASCRIPT_NEWS_FAILURE  = 'PDP_FETCH_JAVASCRIPT_NEWS_FAILURE';



export const enableBackgroundColorChanging = (colorPool) => ({
  type: PDP_ENABLE_BACKGROUND_COLOR_CHANGING,
  payload: {
    colorPool,
  }
});



export const changeBackgroundColor = (color) => ({
  type: PDP_CHANGE_BACKGROUND_COLOR,
  payload: {
    backgroundColor: color,
  }
});


export const fetchProductDetails = () => ({ type: PDP_FETCH_PRODUCT_DETAILS });



export const fillProductDetails = (product) => ({
  type: PDP_FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: {
    product
  },
});



export const fetchJavascriptNews  = () => ({ type: PDP_FETCH_JAVASCRIPT_NEWS });
export const fillJavascriptNews   = (data) => ({ type: PDP_FETCH_JAVASCRIPT_NEWS_SUCCESS, payload: data });
export const failJavascriptNews   = (err) => ({ type: PDP_FETCH_JAVASCRIPT_NEWS_FAILURE, payload: err });
