export const PDP_SET_STATE = 'PDP_SET_STATE';
export const PDP_SET_PRODUCT_ID = 'PDP_SET_PRODUCT_ID';
export const PDP_ENABLE_BACKGROUND_COLOR_CHANGING = 'PDP_ENABLE_BACKGROUND_COLOR_CHANGING';
export const PDP_CHANGE_BACKGROUND_COLOR = 'PDP_CHANGE_BACKGROUND_COLOR';



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
