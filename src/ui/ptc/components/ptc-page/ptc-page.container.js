import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PtcPage } from './ptc-page';
import { ping } from '../../actions';

export const PdpPageContainer = connect(
  ({ ping }) => ({ isPinging: ping.isPinging }),
  (dispatch) => ({ ...bindActionCreators({ ping }, dispatch) })
)(PtcPage);
