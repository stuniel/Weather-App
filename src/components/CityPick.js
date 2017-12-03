import React from 'react';
import CityList from './CityList';

class CityPick extends React.Component {
  constructor() {
    super();
    this.goToCity = this.goToCity.bind(this);
  }

  goToCity(e) {
    e.preventDefault();
    console.log('Entering City!');
    this.props.toggleMenu();
    this.props.loadWeather(this.props.words);
  }

  render() {
    return (
      <div className="city-select-wrapper">
        <form className="city-selector" onSubmit={(e) => {this.goToCity(e)}}>
          <h2>
            What <br />
            is the <br />
            city name?
          </h2>
          <div className="search-city">
            <input type="text" required placeholder="City Name" autoComplete="on" value={this.props.words} ref={(input) => {this.cityInput = input}} onChange={(e) => { this.props.loadCities(e) }}
            />
          <CityList
            cities={this.props.cities}
            words={this.props.words}
            updateInput={this.props.updateInput}
          />
          </div>
          <button type="submit">Check Weather</button>
        </form>
      </div>
    )
  }
}

CityPick.contextTypes = {
  router: React.PropTypes.object
}

CityPick.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
  loadWeather: React.PropTypes.func.isRequired,
  words: React.PropTypes.string,
  loadCities: React.PropTypes.func.isRequired,
  cities: React.PropTypes.array.isRequired,
  updateInput: React.PropTypes.func.isRequired
}

export default CityPick;
