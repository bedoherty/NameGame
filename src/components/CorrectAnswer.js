import React, { Component } from 'react';
import '../styles/CorrectAnswer.css';

//  Importing components

class CorrectAnswer extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="correct-answer">
        {this.props.correctImage != "" ? (<img src={this.props.correctImage} />) : "" } <br />
        <div className={this.props.wasCorrect ? "correct-answer-label correct" : "correct-answer-label incorrect"}>{this.props.correctName}</div>
      </div>
    );
  }
}

export default CorrectAnswer;
