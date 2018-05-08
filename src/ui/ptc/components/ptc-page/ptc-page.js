import React, { Component } from 'react';
import { connectWithIoC } from 'platform-core/lib/react-enhancers/connectWithIoC';

class _PtcPage extends Component {
  render() {
    const { isPinging } = this.props;

    return (
      <div>
        <span>I am PTC page</span>
        <br/>
        <a href='' onClick={this.onClick}>Got It!</a>
        <div>
          { isPinging && <span>pinging...</span> }
          { !isPinging && <button type="button" onClick={this.ping.bind(this)}>Ping</button> }
        </div>
      </div>
    );
  }

  onClick() {
    alert('Nice!');
  }

  ping() {
    this.props.ping();
  }
}


export const PtcPage = connectWithIoC(['api'])(_PtcPage);
