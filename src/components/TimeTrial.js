/*
 *	This component implements the Time Trial game mode.
 *	This game mode tests to see how quickly you can get
 *	one correct answer submitted.
 */

import React, { Component } from 'react';
import '../styles/TimeTrial.css';

//  Importing components
import GameClock from './GameClock';
import PictureRow from './PictureRow';
import HighScore from './HighScore';
import CorrectAnswer from './CorrectAnswer';
import Stats from './Stats';

//https://placehold.it/340x340

class TimeTrial extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		"WTData": this.props.WTData,
  		"dataReady": false,
  		"callbacks": [
  			() => {this.tryAnswer(0);},
  			() => {this.tryAnswer(1);},
  			() => {this.tryAnswer(2);},
  			() => {this.tryAnswer(3);},
  			() => {this.tryAnswer(4);},
  		],
  		"gameClock": 0,
  		"currBest": 1000000000000,
  		"lastRoundURL": "",
  		"lastRoundName": "",
  		"lastRoundWasCorrect": null,
  		"correctAnswers": 0,
  		"incorrectAnswers": 0,
  	};
  }

  componentDidMount() {
  	this.pickRandomData();
  }

  render() {
    return (
      <div className="time-trial-background">
        <div className="time-trial-conntainer">
        	<PictureRow currentData={this.state.currentData} callbacks={this.state.callbacks} dataReady={this.state.dataReady} />
        	<div className="time-trial-label">Who is {this.state.currName}?  {this.state.result}</div>
        	<CorrectAnswer wasCorrect={this.state.lastRoundWasCorrect} correctImage={this.state.lastRoundURL} correctName={this.state.lastRoundName}/>
        </div>
        <GameClock time={this.state.gameClock} incCallback={this.incrementClock.bind(this)}/>
        <HighScore highScore={this.state.currBest} />
        <Stats stats={this.state.correctAnswers.toString() + "/" + (this.state.correctAnswers + this.state.incorrectAnswers).toString() + " Correct"} />
      </div>
    );
  }

  incrementClock = () => {
  	console.log("tick");
  	this.setState({
  		"gameClock": Math.round((this.state.gameClock + 0.01) * 100) / 100
  	});
  };

  tryAnswer = (answer) => {
  	var answerTime = this.state.gameClock;
  	console.log(this.state.currentData[this.state.currAnswer]);
  	if (answer == this.state.currAnswer) {
  		this.setState({
  			"lastRoundURL":  this.state.currentData[this.state.currAnswer].headshot.url,
  			"lastRoundName": this.state.currentData[this.state.currAnswer].firstName + " " + this.state.currentData[this.state.currAnswer].lastName,
  			"lastRoundWasCorrect": true,
  			"correctAnswers": this.state.correctAnswers + 1
  		});
  	}
  	else
  	{
  		this.setState({
  			"lastRoundURL":  this.state.currentData[this.state.currAnswer].headshot.url,
  			"lastRoundName": this.state.currentData[this.state.currAnswer].firstName + " " + this.state.currentData[this.state.currAnswer].lastName,
  			"lastRoundWasCorrect": false,
  			"incorrectAnswers": this.state.incorrectAnswers + 1
  		});
  	}

  	if (answerTime < this.state.currBest) {
  		this.setState({
  			"currBest": answerTime
  		})
  	}

  	this.setState({
  		"gameClock": 0
  	});

  	this.pickRandomData();
  };

  /*  I think the obvious solution to randomly selecting data might be to shuffle the array
   *  and then pop off the first X elements,  However I think the average case of brute
   *  force generating random numbers until I have 5 unique numbers has an average
   *  runtime that is much better, even though the worst case might be indefinite, 
   *  the probability of such an event is fairly low.
   */
  pickRandomData = () => {
    var indexes = [];
    var data = [];
    var currAnswer = 0;
    var itemsNeeded = 5;

    //  If we're in Mat(t) Mode we'll need one less item and have to generate a Mat(t) first
    if (this.props.mattModeEnabled)
    {
      var mattIndex = Math.floor(Math.random() * (this.props.mattCount));
      
      indexes.push(mattIndex);
      data.push(this.state.WTData[mattIndex]);

      console.log("Matt:");
      console.log(this.state.WTData[mattIndex]);

      currAnswer = data.indexOf(this.state.WTData[mattIndex]);

      itemsNeeded--;
    }
    else
    {
      currAnswer = Math.floor(Math.random() * (5));
    }

    for (var i = 0; i < itemsNeeded; i++)
    {
      var newIndex = Math.floor(Math.random() * 100);

      while (indexes.indexOf(newIndex) >= 0)
      {
        newIndex = Math.floor(Math.random() * 100);
      }

      indexes.push(newIndex);

      //  Randomly pick push or unshift for a pseudoshuffle
      if (Math.random() > 0.5)
      {
        data.push(this.state.WTData[newIndex]);
      }
      else
      {
        data.push(this.state.WTData[newIndex]);
      }
    }

    this.setState({
      "currentData": data,
      "dataReady": true,
      "currName": data[currAnswer].firstName + " " + data[currAnswer].lastName,
      "currAnswer": currAnswer
    });
  };
}

export default TimeTrial;
