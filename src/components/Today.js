import React from 'react';
import Loading from './Loading';
import { kelToCel } from '../functions';
import { imageIcon } from '../functions';
import { latinize } from '../functions';

class Today extends React.Component {
  render() {
    if(!this.props.todayWeather) {
      return (
        <Loading />
      )
    }
    const cityName = latinize(this.props.todayWeather.name);
    const icon = this.props.todayWeather.weather[0].icon;
    const tempValue = kelToCel(this.props.todayWeather.main.temp);
    const desc = this.props.todayWeather.weather[0].main;
    return (
      <div className="today-weather">
        <div className="today-top">
          <h2 className="city-name">{cityName}</h2>
          <span className="today">Today</span>
        </div>
        <div className="weather-icon">{imageIcon({icon})}</div>
        <div className="temp-desc">
          <span className="temperature"><span className="temperature-value">{tempValue}</span>°C</span>
          <span className="description">{desc}</span>
        </div>
      </div>
    )
  }
}

Today.propTypes = {
  todayWeather: React.PropTypes.object.isRequired
}

export default Today;
