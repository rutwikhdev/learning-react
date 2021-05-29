import React from 'react';
import HeadComponent from './HeadComponent';

// using JSX we can pass onClick event to the head component as follows
// Till now it's all basic react.
class ClickCount extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <HeadComponent {...this.props} onClick={this.onClick} />
      </div>
    );
  }
}

export default ClickCount;