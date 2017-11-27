import React from 'react';
import DayWeather from './DayWeather';

class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast-weather">
        <ul className="four-days">
          <DayWeather />
        </ul>
      </div>
    )
  }
}

export default Forecast;
