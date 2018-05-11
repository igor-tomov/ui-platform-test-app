import { PDP_ENABLE_BACKGROUND_COLOR_CHANGING, changeBackgroundColor } from '../actions';



const changeColorEpic = action$ =>
  action$.ofType(PDP_ENABLE_BACKGROUND_COLOR_CHANGING)
    .delay(2000)
    .mapTo(changeBackgroundColor('#ffccee'));

export default [ changeColorEpic ];
