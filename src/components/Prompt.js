/*
 *	Prompt.js
 *
 *	Implements the picture prompt for reverse mode.
 *
 *	Written by Brian Doherty
 */

//	Import React stuff
import React, { Component } from 'react';

//	Import our styles
import '../styles/Prompt.css';

class Prompt extends Component {
  render() {
    return (
      <div>
        <div className="prompt-label">Who is:</div>
        {this.props.promptImage ? (<img src={this.props.promptImage} className="prompt-image" alt="prompt" />) : "" }
      </div>
    );
  }
}

export default Prompt;
