import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './img/icon/alert.icon.svg';
import './img/icon/account.icon.svg';
import './img/icon/arrow-down.icon.svg';
import { SVGIcon } from 'platform-core/lib/react-components/SVGIcon';
import './style.scss';

export class PdpPage extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <div className="some-class">I am PDP page</div>
        <SVGIcon icon="alert.icon"/>
        <SVGIcon icon="account.icon"/>
        <SVGIcon icon="arrow-down.icon"/>
      </Fragment>
    );
  }
}



export const PdpPageContainer = connect(
  ({ pdp }) => ({ title: pdp.title })
)(PdpPage);
