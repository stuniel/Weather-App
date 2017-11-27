import React from 'react';
import { getCurrentLocation } from '../functions';
import Forecast from './Forecast';
import CityList from './CityList';

class CityPick extends React.Component {
  constructor() {
    super();
    this.goToCity = this.goToCity.bind(this);
    this.loadCities = this.loadCities.bind(this);
    // this.renderList = this.renderList.bind(this);
    this.state = {
      words: undefined
    }
  }

  capitalize(input) {
    const words = input.split(' ');
    const newWord = []
    words.forEach((word) => {
      newWord.push(word.charAt(0).toUpperCase() + word.slice(1));
    })
    const word = newWord.join(" ");
    return word
  }

  loadCities(e) {
    const input = e.target.value;
    const words = this.capitalize(input);
    this.setState({
      words: words
    });
  }

  goToCity(e) {
    e.preventDefault();
    console.log('Entering City!');
    const cityName = this.capitalize(this.cityInput.value);
    if(this.props.pathname === "/") {
      this.context.router.transitionTo(`city/${cityName}`)
    } else {
      this.context.router.transitionTo(`${cityName}`)
      this.props.toggleMenu();
    }
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
            <input type="text" required placeholder="City Name" defaultValue={getCurrentLocation()} ref={(input) => {this.cityInput = input}} onChange={(e) => { this.loadCities(e) }}
            />
          <CityList words={this.state.words} />
          </div>
          <button type="submit">Check Weather</button>
        </form>
        <Forecast />
      </div>
    )
  }
}

CityPick.contextTypes = {
  router: React.PropTypes.object
}
//
// CityPick.propTypes = {
//   toggleMenu: React.PropTypes.func.isRequired
// }

export default CityPick;
