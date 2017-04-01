import React, { Component } from 'react';
import '../styles/Stats.css';

//  Importing components

class Stats extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="stats">
        {this.props.stats}
      </div>
    );
  }
}

export default Stats;
