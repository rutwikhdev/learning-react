import React from 'react';
import ClickWrapper from './ClickWrapper';

class HeadComponent extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={this.props.style}>

          <h1>Simple react</h1>
          <p>These is dummy paragraph prop</p>
          <p>{this.props.extended_text}</p>
      </div>
    );
  }
}

export default ClickWrapper(HeadComponent);