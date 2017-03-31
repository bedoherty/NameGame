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
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Marathon": {
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Mat(t)": { 
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Time Trial (R)": {
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Marathon (R)": {
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Mat(t) (R)": {
				"callback": () => {this.setGameState("menu2");},
				"enabled": true
			},
			"Hints": {
				"callback": this.toggleHints,
				"enabled": false
			},
		},
		"gameState": "menu"
  	}
  }

  render() {
    return (
      <div className="window">
      	{this.state.gameState == "menu" ? "" : (<div className="top-right-x" onClick={() => {this.setGameState("menu")}}>X</div>) }
      	{this.renderGame()}
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

  setGameState(gameState) {
  	this.setState({
  		"gameState": gameState
  	});
  }

  renderGame() {
  	if (this.state.gameState == "menu")
  	{
  		return (
  			<Menu menuItems={this.state.menuItems} hintsEnabled={this.state.hintsEnabled}/>
		);
  	}
  }
}

export default Window;
