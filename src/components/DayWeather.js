import React from 'react';
import { imageIcon } from '../functions';

class DayWeather extends React.Component {
  render() {
    const forecast = this.props.forecast[this.props.id];
    const todayForecast = forecast[forecast.length-1];
    const day = todayForecast.day;
    const icon = todayForecast.icon;
    const tempMax = todayForecast.tempMax;
    const tempMin = todayForecast.tempMin;

    return (
      <li className="daily-box">
        <span className="day">{day}</span>
        {imageIcon({icon})}
        <span className="temp">
          <span className="max">{tempMax}°</span>
          <span className="min">{tempMin}°</span>
        </span>
      </li>
    )
  }
}

DayWeather.propTypes = {
  forecast: React.PropTypes.array.isRequired,
  id: React.PropTypes.number.isRequired
}

export default DayWeather;
