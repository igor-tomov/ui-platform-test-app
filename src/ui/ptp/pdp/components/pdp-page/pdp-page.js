import React, { Component } from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { enableBackgroundColorChanging, fetchProductDetails } from '../../actions';
import { connectWithIoC } from 'ui-platform-core/dist/lib/react-enhancers/connectWithIoC';
import './img/icon/alert.icon.svg';
import './img/icon/account.icon.svg';
import './img/icon/arrow-down.icon.svg';
import { SVGIcon } from 'ui-platform-core/dist/lib/react-components/SVGIcon';
import './style.scss';
import { JavascriptNewsContainer } from './JavascriptNews';

export class PdpPage extends Component {

  static propTypes = {
    backgroundColor: PropTypes.string,
    enableBackgroundColorChanging: PropTypes.func,
    fetchProductDetails: PropTypes.func,
    productId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    enableBackgroundColorChanging: () => null,
    fetchProductDetails: () => null,
    backgroundColor: '#fff',
  };



  componentDidMount() {
    //this.props.enableBackgroundColorChanging(['#ffccee', ' #ccffe6', '#f2e6d9']);
    this.props.fetchProductDetails();
  }


  render() {
    return (
      <section
        className="pdp__container"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <h1>Product details page</h1>
        <h2>ID: {this.props.productId}</h2>
        <p>
          <a href="/ptc">Go to Checkout</a>
        </p>
        <div>
          <JavascriptNewsContainer />
        </div>
        <p>
          <SVGIcon icon="alert.icon"/>
          <SVGIcon icon="account.icon"/>
          <SVGIcon icon="arrow-down.icon"/>
        </p>
      </section>
    );
  }
}



export const PdpPageContainer = compose(
  connect(
    ({ pdp }) => ({ productId: pdp.productId }),
    (dispatch) => bindActionCreators({ enableBackgroundColorChanging, fetchProductDetails }, dispatch)
  ),
  connectWithIoC(['productDataService'])
)(PdpPage);
