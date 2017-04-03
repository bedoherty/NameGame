/*
 *  GameClock.js
 *
 *  This component displays the current time a question has remained unanswered.
 *
 *  Written by Brian Doherty
 */

 // Import React stuff
import React, { Component } from 'react';

//  Import our styles
import '../styles/GameClock.css';

class GameClock extends Component {
  constructor(props) {
  	super(props);

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
