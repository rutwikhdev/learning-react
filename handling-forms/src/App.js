import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { pro: "" }
  }

  inputHandler = (event) => {
    this.setState({ pro: event.target.value })
  }

  submitHandler = () => {
    alert("Your profession is " + this.state.pro + " is that correct.")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.inputHandler}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;