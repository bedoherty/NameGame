import React, { Component } from 'react';
import '../styles/Stats.css';

//  Importing components

class Stats extends Component {
  render() {
    return (
      <div className="stats">
        {this.props.stats}
      </div>
    );
  }
}

export default Stats;
