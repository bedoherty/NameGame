import React, { Component } from 'react';
import '../styles/MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <p className="menu-item" onClick={this.props.onClick}>{this.props.enabled ? this.props.text : (<strike>{this.props.text}</strike>) }</p>
    );
  }
}

export default MenuItem;
