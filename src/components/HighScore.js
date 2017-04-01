import React, { Component } from 'react';
import '../styles/HighScore.css';

//  Importing components

class HighScore extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="high-score">
        Current Best: {this.props.highScore}
      </div>
    );
  }
}

export default HighScore;
