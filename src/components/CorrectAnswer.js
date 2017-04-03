import React, { Component } from 'react';
import '../styles/CorrectAnswer.css';

//  Importing components

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
