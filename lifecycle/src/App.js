import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor : "red" }
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { favoritecolor: "yellow" };
  // }

  // shouldComponentUpdate() {
  //   return false;
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "green"});
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
    // return (prevProps, prevState)
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }

  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }

  render(){
    return(
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        {/* <button type="button" onClick={this.changeColor}>Change color</button> */}
      </div>
    );
  };
}

export default App;

