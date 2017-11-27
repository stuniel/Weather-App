import React from 'react';
import { kelToCel } from '../functions';
import { imageIcon } from '../functions';

class Today extends React.Component {
  render() {
    // if(!this.props.weather) {
    //   return (
    //     <span>Loading</span>
    //   )
    // }
    const cityName = this.props.cityName || 'Krakow';
    const icon = this.props.weather.weather[0].icon || 'icon';
    const tempValue = kelToCel(this.props.weather.main.temp) || 24;
    const desc = this.props.weather.weather[0].main || 'no connection';
    return (
      <div className="today-weather">
        <h2 className="city-name">{cityName}</h2>
        <span className="today">Today</span>
        <div className="weather-icon">{imageIcon({icon})}</div>
        <div className="temp-desc">
          <span className="temperature"><span className="temperature-value">{tempValue}</span>°C</span>
          <span className="description">{desc}</span>
        <span>&#709;</span>
        </div>
      </div>
    )
  }
}

export default Today;
