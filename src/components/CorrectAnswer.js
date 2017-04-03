/*
 *	CorrectAnswer.js
 *
 *	This component displays what the correct answer of the last
 *	question was to the user.
 *
 *	Written by Brian Doherty
 */

//	Import React stuff
import React, { Component } from 'react';

//	Import our styles
import '../styles/CorrectAnswer.css';

class CorrectAnswer extends Component {
  render() {
    return (
      <div className="correct-answer">
        {this.props.correctImage !== "" ? (<img id="correct-image" src={this.props.correctImage} alt="correctimage"/>) : "" } <br />
        <div className={this.props.wasCorrect ? "correct-answer-label correct" : "correct-answer-label incorrect"}>{this.props.correctName}</div>
      </div>
    );
  }
}

export default CorrectAnswer;
