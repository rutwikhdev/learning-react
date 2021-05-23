import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  // let data = <div></div>
  state = {
    city: "",
    data: {}
  }

  handleChange = (e) => {
    this.setState({ city:e.target.value });
  };

  getWeather = async (e) => {
    e.preventDefault();
    const apiKey = 'cce6de3bb724a703182174b949b59e4f';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${apiKey}`
    
    try {
      const res = await axios.get(url);
      console.log(res.data);
      this.setState({ data: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  renderData = () => {
    if (Object.keys(this.state.data).length === 0) {
      return <div></div>;
    } else {
      return (
        <div id="data-center">
          <div id="box">
            <p>City:</p> 
            <h2>{this.state.data.name}</h2>
          </div>
          <div id="box">
            <p>Temperature:</p> 
            <h2>{this.state.data.main.temp}</h2>
          </div>
          <div id="box">
            <p>Weather:</p> 
            <h2>{this.state.data.weather[0].description}</h2>
          </div>
          <div id="box">
            <p>Humidity:</p> 
            <h2>{this.state.data.main.humidity}</h2>
          </div>
          <div id="box">
            <p>Wind speed:</p> 
            <h2>{this.state.data.wind.speed} mph</h2>
          </div>
        </div>
      );
    }
  }


  render() {
    return(
      <div>
        <form onSubmit={this.getWeather} id="center">
          <input 
            type="text" 
            value={this.state.city} 
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        
          {this.renderData()}

      </div>
    );
  }
}

export default App;