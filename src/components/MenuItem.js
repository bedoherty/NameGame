import React, { Component } from 'react';
import '../styles/MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <p className={this.props.enabled ? "menu-item" : "menu-item red"} onClick={this.props.onClick}>{this.props.enabled ? this.props.text : (<strike>{this.props.text}</strike>) }</p>
    );
  }
}

export default MenuItem;
