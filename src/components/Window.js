/*
 *  Window.js
 *
 *  This component implements the overall window.
 *  This will cover the whole viewport.
 *
 *  Written by Brian Doherty
 */

//  Import React stuff
import React, { Component } from 'react';

//  Import our styles
import '../styles/Window.css';

//	Import our components
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
			"Mat(t) Mode": { 
				"callback": this.toggleMattMode,
				"enabled": false
			},
			"Reverse Mode": {
				"callback": this.toggleReverseMode,
				"enabled": false
			},
			"Hints": {
				"callback": this.toggleHints,
				"enabled": false
			},
		},
		"gameState": "menu",
    "mattCount": 0,
  	}
  }

  render() {
    return (
      <div className="window">
      	{this.state.gameState === "menu" ? "" : (<div className="top-right-x" onClick={() => {this.setGameState("menu")}}>X</div>) }
      	{this.renderGame()}
      </div>
    );
  }

  //  Helper function that toggles on and off Mat(t) Mode globally
  toggleMattMode = () => {
    var menuItems = this.state.menuItems;
    menuItems['Mat(t) Mode']['enabled'] = !menuItems['Mat(t) Mode']['enabled'];
    this.setState({
      "menuItems": menuItems
    });
  }

  //  Helper function that toggles on and off hint mode globally
  toggleReverseMode = () => {
    var menuItems = this.state.menuItems;
    menuItems['Reverse Mode']['enabled'] = !menuItems['Reverse Mode']['enabled'];
    this.setState({
      "menuItems": menuItems
    });
  }

  //	Helper function that toggles on and off hint mode globally
  toggleHints = () => {
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
        
        this.setState({
        	"WTData": this.doMattSort(responseJson)
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

  //  This is a silly helper method to shift all Mat(t) type
  //  names to the front of the list to make the Mat(t) mode 
  //  startup time faster at the expense of initial load times.
  doMattSort = (data) => {
    var WTData = [];
    var mattCount = 0;
    
    for (var index = 0; index < 100; index++)
    {
      if (data['items'][index]['firstName'].startsWith("Mat"))
      {
        WTData.unshift(data['items'][index]);
        mattCount++;
      }
      else 
      {
        WTData.push(data['items'][index]);
      }
    }

    this.setState({
      "mattCount": mattCount,
    });

    return WTData;
  }

  //	Checks state and renders the appropriate game mode or menu
  renderGame() {
  	if (this.state.gameState === "menu")
  	{
      return (
    	 <Menu menuItems={this.state.menuItems}/>
      );
  	}
  	if (this.state.gameState === "time-trial")
  	{
      return (
        <TimeTrial  WTData={this.state.WTData} 
                    mattModeEnabled={this.state.menuItems['Mat(t) Mode'].enabled}
                    mattCount={this.state.mattCount}
                    reverseModeEnabled={this.state.menuItems['Reverse Mode'].enabled}
                    hintsEnabled={this.state.menuItems.Hints.enabled}  
                    />
      );
  	}
    if (this.state.gameState === "marathon")
    {
      return (
        <Marathon   WTData={this.state.WTData} 
                    mattModeEnabled={this.state.menuItems['Mat(t) Mode'].enabled}
                    mattCount={this.state.mattCount}
                    reverseModeEnabled={this.state.menuItems['Reverse Mode'].enabled}
                    hintsEnabled={this.state.menuItems.Hints.enabled} 
                    />
      );
    }
  }
}

export default Window;
