import React from 'react';
import newCities from '../newCities.json';

class CityList extends React.Component {
  constructor() {
    super();
    this.state = {
      typed: [],
      cities: []
    }
  }

  componentDidMount() {
    if(this.state.cities[0] === undefined) {
      this.setState({
        cities: newCities
      })
    }
    const typed = newCities
    .filter((city) => {return city.name.indexOf(this.props.words) !== -1})
    console.log(typed[5])
    this.setState({
      typed: typed
    })
  }

  renderAuto(input) {
    if(this.props.words === "") return
    return this.state.typed
      .filter((city) => {return city.name.indexOf(this.props.words) !== -1})
      .slice(0,2)
      .map((city) => {
        const keyName = city.name + city.country;
        return (
          <li key={keyName}>{city.name}, {city.country}</li>
      )})
  }

  render() {
    console.log(this.state.cities[0])
    return (
      <ul className="auto-complete">
        {this.renderAuto(this.props.words)}
      </ul>
    )
  }
}

export default CityList
