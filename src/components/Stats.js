/*
 *	Stats.js
 *
 *	This component implements the statistics display.
 *
 *	Written by Brian Doherty
 */

//	Import React stuff
import React, { Component } from 'react';

//	Import our styles
import '../styles/Stats.css';

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
