import React, { Component } from 'react';
import '../styles/Window.css';

//	Importing components
import Menu from './Menu'

class Window extends Component {

  constructor(props) {
  	super(props);

  	//	Set default state
  	this.state = {
  		"menuItems": {
			"Time Trial": {
				"callback": () => {console.log("Time Trial");},
				"enabled": true
			},
			"Marathon": {
				"callback": () => {console.log("Marathon");},
				"enabled": true
			},
			"Mat(t)": { 
				"callback": () => {console.log("Mat(t)");},
				"enabled": true
			},
			"Time Trial (R)": {
				"callback": () => {console.log("Time Trial (R)");},
				"enabled": true
			},
			"Marathon (R)": {
				"callback": () => {console.log("Marathon (R)");},
				"enabled": true
			},
			"Mat(t) (R)": {
				"callback": () => {console.log("Mat(t) (R)");},
				"enabled": true
			},
			"Hints": {
				"callback": this.toggleHints,
				"enabled": false
			},
		},
  	}
  }

  render() {
    return (
      <div className="window">
      	<Menu menuItems={this.state.menuItems} hintsEnabled={this.state.hintsEnabled}/>
      </div>
    );
  }

  toggleHints = () => {
  	console.log("Toggling Hints");
  	var menuItems = this.state.menuItems;
  	menuItems['Hints']['enabled'] = !menuItems['Hints']['enabled'];
  	this.setState({
  		"menuItems": menuItems
  	});
  }
}

export default Window;
