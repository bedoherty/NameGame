import React, { Component } from 'react';
import '../styles/GameClock.css';

//  Importing components

class GameClock extends Component {
  constructor(props) {
  	super(props);

  	//	Setup our default state
  	this.state = {
  		"time": 0
  	};
  	this.timer = null;
  }

  componentDidMount() {
  	//	Start the timer
  	this.startTimer();
  }

  componentWillUnmount() {
  	this.destroyTimer();
  }

  render() {
    return (
      <div className="game-clock">
        {this.props.time}
      </div>
    );
  }

  startTimer() {
  	console.log("Starting timer");
  	this.timer = setInterval(this.props.incCallback, 10);
  }

  destroyTimer() {
  	clearInterval(this.timer);
  }
}

export default GameClock;
