import React from 'react';

class MenuIcon extends React.Component {
  render() {
    return (
      <div className="menu" onClick={() => {this.props.toggleMenu()}} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default MenuIcon
