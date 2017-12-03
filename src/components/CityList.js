import React from 'react';

class CityList extends React.Component {
  constructor() {
    super();
    this.renderAuto = this.renderAuto.bind(this);
  }

  renderAuto(input) {
    if(this.props.words === "") return
    return this.props.cities
      .filter((city) => {return city.city.indexOf(this.props.words) !== -1})
      .slice(0,2)
      .map((city) => {
        const keyName = city.city + city.country;
        return (
          <li key={keyName} onClick={(e) => {this.props.updateInput(e)}}>{city.city}, {city.country}</li>
      )})
  }

  render() {
    return (
      <ul className="auto-complete">
        {this.renderAuto(this.props.words)}
      </ul>
    )
  }
}

CityList.propTypes = {
  words: React.PropTypes.string,
  cities: React.PropTypes.array.isRequired,
  updateInput: React.PropTypes.func.isRequired
}

export default CityList
