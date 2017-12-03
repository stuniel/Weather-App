import React from 'react';
import DayWeather from './DayWeather';

class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast-weather">
        <ul className="four-days">
          <DayWeather
            todayWeather={this.props.todayWeather}
            forecast={this.props.forecast}
            key={0}
            id={0}
          />
          <DayWeather
            todayWeather={this.props.todayWeather}
            forecast={this.props.forecast}
            key={1}
            id={1}
          />
          <DayWeather
            todayWeather={this.props.todayWeather}
            forecast={this.props.forecast}
            key={2}
            id={2}
          />
        </ul>
      </div>
    )
  }
}

Forecast.propTypes = {
  todayWeather: React.PropTypes.object.isRequired,
  forecast: React.PropTypes.array.isRequired
}

export default Forecast;
