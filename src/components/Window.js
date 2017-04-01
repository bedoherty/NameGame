import React, { Component } from 'react';
import '../styles/Window.css';

//	Importing components
import Menu from './Menu'
import TimeTrial from './TimeTrial'
import Marathon from './Marathon'

class Window extends Component {

  constructor(props) {
  	super(props);

  	//	Fetch WillowTree API data on creation
  	this.fetchWTData();

  	//	Set default state
  	this.state = {
  		"menuItems": {
			"Time Trial": {
				"callback": () => {this.setGameState("time-trial");},
				"enabled": true
			},
			"Marathon": {
				"callback": () => {this.setGameState("marathon");},
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

  //	Helper function that toggles on and off hint mode globally
  toggleHints = () => {
  	console.log("Toggling Hints");
  	var menuItems = this.state.menuItems;
  	menuItems['Hints']['enabled'] = !menuItems['Hints']['enabled'];
  	this.setState({
  		"menuItems": menuItems
  	});
  }

  //	Helper function for fetching data from the WillowTree API
  fetchWTData() {
  	return fetch('https://willowtreeapps.com/api/v1.0/profiles/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
        	"WTData": responseJson
        });
      })
      .catch((error) => {
        console.error(error);
	 });
  }

  //	Helper function for immutably changing our game mode state
  setGameState(gameState) {
  	this.setState({
  		"gameState": gameState
  	});
  }

  //	Checks state and renders the appropriate game mode or menu
  renderGame() {
  	if (this.state.gameState == "menu")
  	{
      return (
    	 <Menu menuItems={this.state.menuItems}/>
      );
  	}
  	if (this.state.gameState == "time-trial")
  	{
      return (
        <TimeTrial WTData={this.state.WTData} hintsEnabled={this.state.menuItems.Hints.enabled} />
      );
  	}
    if (this.state.gameState == "marathon")
    {
      return (
        <Marathon WTData={this.state.WTData} hintsEnabled={this.state.menuItems.Hints.enabled} />
      );
    }
  }
}

export default Window;
