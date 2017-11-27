import React from 'react';
import Header from './Header';
import Today from './Today';
import Forecast from './Forecast';
import axios from 'axios';

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.loadWeather = this.loadWeather.bind(this);
    this.state = {
      weather: null,
      city: {},
    }
  }

  toggleMenu() {
    console.log("hello");
    document.querySelector('.search-menu').classList.toggle('active');
    document.querySelectorAll('.menu').forEach((menu) => {menu.classList.toggle('open')});
  }

  componentDidMount() {
    this.loadWeather();
  }

  // componentDidUpdate() {
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.params.cityName}&appid=5480a101c283186e7f06b86000f49ce1`)
  //   .then(response => this.setState({weather: response.data}))
  // }
  loadWeather() {
    console.log('fetched')
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.params.cityName}&appid=5480a101c283186e7f06b86000f49ce1`)
    // axios.get(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1`)
    .then(response => this.setState({weather: response.data}))
  }

  render() {
    if(!this.state.weather) {
      return (
        <span>Loading</span>
      )
    }
    return (
      <div className="weather-app-wrapper">
        <Header toggleMenu={this.toggleMenu}
          cityName={this.props.params.cityName}
        />
        <Today
          weather={this.state.weather}
          cityName={this.props.params.cityName}
        />
        <Forecast />
      </div>
    )
  }
}

export default WeatherApp;
