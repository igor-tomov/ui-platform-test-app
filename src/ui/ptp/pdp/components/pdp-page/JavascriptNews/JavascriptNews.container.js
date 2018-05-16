import {connect} from 'react-redux';
import { JavascriptNews } from './JavascriptNews';


const mapStateToProps = (state) => ({ newsList: state.pdp.javascriptNews });



export const JavascriptNewsContainer = connect(mapStateToProps)(JavascriptNews);
