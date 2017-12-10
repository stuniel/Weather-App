import React from 'react';
import DayWeather from './DayWeather';
import { imageIcon } from '../functions';
import { dateConvert } from '../functions';

class Forecast extends React.Component {
  render() {
    const weather = this.props.todayWeather;
    const sunrise = dateConvert(weather.sys.sunrise);
    const sunset = dateConvert(weather.sys.sunset);
    const humidity = weather.main.humidity;
    const pressure = weather.main.pressure;
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
        <ul className="detailed-forecast">
          <li>
            <div>sunrise</div>
            <div>{sunrise}</div>
          </li>
          <li>
            <div>sunset</div>
            <div>{sunset}</div>
          </li>
          <li>
            <div>humidity</div>
          <div><span><strong>{humidity}</strong>%</span></div>
          </li>
          <li>
            <div>pressure</div>
          <div><span><strong>{pressure}</strong>hPa</span></div>
          </li>
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
