import React from 'react';

// Suppose we wanted onClick to carry out certain extensive operations 
// such as accessing state or passing it through props to multiple components.
// We could create an instance of ClickCount for every time we need to wrap a 
// component where we’ll pass our click handler. However that would be repetitive 
// and could easily lead to spaghetti code, now this is where higher order components come in.
// This logic can be reused by,
// const ReaplaceComponent = ClickWrapper(HeadComponent);
const ClickWrapper = (WrappedComponent) => {
  return class ClickCount extends React.Component {
    constructor(props) {
      super(props);

      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
      console.log("Higher Order Component: ",e)
    }

    render() {
      return(
        <div>
          <WrappedComponent {...this.props} onClick={this.onClick} />
        </div>
      );
    }
  }
}

export default ClickWrapper;