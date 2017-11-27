import React from 'react';
import CityPick from './CityPick';
import MenuIcon from './MenuIcon';

class Header extends React.Component {
  render() {
    return (
      <div className="menu-icon">
        <div className="search-menu">
          {/* <MenuIcon /> */}
          <CityPick toggleMenu={this.props.toggleMenu} />
        </div>
        <MenuIcon toggleMenu={this.props.toggleMenu} />
      </div>
    )
  }
}

export default Header;
