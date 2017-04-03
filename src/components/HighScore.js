/*
 *	HighScore.js
 *
 *	This component displays the users current highest score
 *
 *	Written by Brian Doherty
 */

//	Import React stuff
import React, { Component } from 'react';

//	Import our styles
import '../styles/HighScore.css';

class HighScore extends Component {
  render() {
    return (
      <div className="high-score">
        Current Best: {this.props.highScore}
      </div>
    );
  }
}

export default HighScore;
