import React from 'react';
import MenuIcon from './MenuIcon';

class Header extends React.Component {
  render() {
    return (
      <div className="menu-icon">
        <MenuIcon toggleMenu={this.props.toggleMenu} />
      </div>
    )
  }
}

Header.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired
}

export default Header;
