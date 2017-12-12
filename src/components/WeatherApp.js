import React from 'react';
import CityPick from './CityPick';
import Header from './Header';
import Today from './Today';
import Forecast from './Forecast';
import Loading from './Loading';
import newCities from '../newCities.json';
import axios from 'axios';
import { kelToCel } from '../functions';
import { localNoon } from '../functions';
import { weekDay } from '../functions';
import { latinize } from '../functions';

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getWeatherStatus = this.getWeatherStatus.bind(this);
    this.loadWeather = this.loadWeather.bind(this);
    this.loadCities = this.loadCities.bind(this);
    this.getTimeOffset = this.getTimeOffset.bind(this);
    this.filterForecast = this.filterForecast.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.state = {
      todayWeather: null,
      forecastWeather: null,
      words: '',
      city: {},
      cities: []
    }
  }

  componentDidMount() {
    if(this.state.cities[0] === undefined) {
      console.log('loaded cities');
      this.setState({
        cities: newCities
      })
    }
    if(!this.state.words) {
      this.loadWeather();
       this.getCurrentLocation();
    }
  }

  toggleMenu() {
    document.querySelector('.search-menu').classList.toggle('active');
    document.querySelectorAll('.menu').forEach((menu) => {menu.classList.toggle('open')});
  }

  getCurrentLocation() {
    console.log("hi")
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5480a101c283186e7f06b86000f49ce1`;
        const fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5480a101c283186e7f06b86000f49ce1`;
        console.log('got current location');
        this.getWeatherStatus(url, fiveUrl);
      })
    }
  }

  loadWeather(city) {
    if(!city) {
      city = 'Barcelona';
      this.setState({ words: city });
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5480a101c283186e7f06b86000f49ce1`;
    const fiveUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5480a101c283186e7f06b86000f49ce1`;
    this.getWeatherStatus(url, fiveUrl);
    this.setState({ words: '' });
  }

  getWeatherStatus(url, fiveUrl) {
    //I am storing a promise in a timeOffset variable so that I can access it later
    const timeOffset = axios.get(url)
    .then(response => {
      this.setState({todayWeather: response.data});
      return this.getTimeOffset(response.data)
    })
    axios.get(fiveUrl)
    .then(response => {
      this.setState({forecastWeather: response.data})
      //I am filtering forecast array with the offset to get the same local time
      timeOffset.then(offset => {
        this.filterForecast(response.data, offset)
      })
    });
  }

  loadCities(e) {
    const input = e.target.value;
    const words = latinize(this.capitalize(input));
    this.setState({ words });
  }

  getTimeOffset(day) {
    const lon = day.coord.lon;
    const lat = day.coord.lat;
    const timestamp = day.dt;
    const apiKey = 'H3G9GQFW2RGF';
    const url = `https://api.timezonedb.com/v2/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    // const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=AIzaSyA8iM1MqBRkHbI69Bu5n1Ik2b7oUDZGVHA`;
    const timeOffset = axios.get(url)
    .then(response => {
      this.setState({ timeOffset: (response.data.gmtOffset/3600) })
      return (response.data.gmtOffset/3600)
    })
    // const timeOffset = axios.get(url)
    // .then(response => {
    //   this.setState({ timeOffset: (response.data.rawOffset/3600) })
    //   return (response.data.rawOffset/3600)
    // })
    console.log('fetched time')
    return timeOffset;
  }

  filterForecast(forecastWeather, timeOffset) {
    const today = new Date().getDay();
    const forecast = [];
    function forecastDay(today, offset) {
      return forecastWeather.list.filter((li) => {
        const day = new Date(li.dt_txt).getDay();
        const thisDay = (today + offset)%6;
        return (day === thisDay)
      });
    }
    forecast[0] = forecastDay(today, 1);
    forecast[1] = forecastDay(today, 2);
    forecast[2] = forecastDay(today, 3);
    forecast.forEach((days) => {
      const day = weekDay((today + forecast.indexOf(days) + 1)%7);
      const icon = days
      .filter((elm) => { return elm.dt_txt.includes(localNoon(timeOffset)) })
      .map((elm) => { return elm.weather[0].icon })
      .toString();
      const tempMax = kelToCel(Math.max.apply(Math,days.map(function(day){return day.main.temp_max;})));
      const tempMin = kelToCel(Math.min.apply(Math,days.map(function(day){return day.main.temp_min;})));
      days.push({
        day,
        icon,
        tempMax,
        tempMin
      })
    })
    this.setState({ forecast })
  }

  updateInput(e) {
    const words = latinize(e.target.innerText.split(',')[0]);
    this.setState({ words });
    this.loadWeather(words);
    this.toggleMenu();
  }

  capitalize(input) {
    const words = input.split(' ');
    const newWord = [];
    words.forEach((word) => {
      newWord.push(word.charAt(0).toUpperCase() + word.slice(1));
    })
    const word = latinize(newWord.join(" ").normalize('NFD'));
    return word
  }

  render() {
    if(!this.state.todayWeather || !this.state.forecastWeather || !this.state.forecast) { return <Loading /> }
    return (
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="main-weather">
            <Header
              toggleMenu={this.toggleMenu}
            />
            <Today
              todayWeather={this.state.todayWeather}
              cityName={this.props.params.cityName}
            />
          </div>
          <Forecast
            forecastWeather={this.state.forecastWeather}
            todayWeather={this.state.todayWeather}
            forecast={this.state.forecast}
          />
          <CityPick
            pathname={this.props.pathname}
            loadCities={this.loadCities}
            loadWeather={this.loadWeather}
            capitalize={this.capitalize}
            toggleMenu={this.toggleMenu}
            words={this.state.words}
            cities={this.state.cities}
            updateInput={this.updateInput}
            handleKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    )
  }
}

export default WeatherApp;
