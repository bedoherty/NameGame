import React, { Component } from 'react';
import '../styles/Prompt.css';

//  Importing components

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
