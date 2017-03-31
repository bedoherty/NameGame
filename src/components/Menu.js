import React, { Component } from 'react';
import '../styles/Menu.css';

//	Importing components
import MenuItem from './MenuItem'

class Menu extends Component {
  render() {
    return (
      <div className="menu-background">
      	<div className="menu-list">
      		{this.renderMenuItems(this.props.menuItems)}
      	</div>
      </div>
    );
  }

  renderMenuItems = (menuItems) => {
  	console.log(menuItems);
  	return (
  			Object.keys(menuItems).map(function(key) {
  				console.log(key);
  				console.log(menuItems[key].callback);
      			return (<MenuItem text={key} onClick={menuItems[key]['callback']} enabled={menuItems[key].enabled}/>);
      		})
	);
  }
}

export default Menu;
