import React, { Component } from 'react';
import '../styles/TimeTrial.css';

//  Importing components
import GameClock from './GameClock';
import PictureRow from './PictureRow';
import HighScore from './HighScore';
import CorrectAnswer from './CorrectAnswer';

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
  			"lastRoundWasCorrect": true
  		});
  	}
  	else
  	{
  		this.setState({
  			"lastRoundURL":  this.state.currentData[this.state.currAnswer].headshot.url,
  			"lastRoundName": this.state.currentData[this.state.currAnswer].firstName + " " + this.state.currentData[this.state.currAnswer].lastName,
  			"lastRoundWasCorrect": false
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

  pickRandomData = () => {
  	var indexes = [];
  	var data = [];
  	for (var i = 0; i < 5; i++)
  	{
  		var newIndex = Math.floor(Math.random() * 100);
  		while (indexes.indexOf(newIndex) >= 0)
  		{
  			newIndex = Math.floor(Math.random() * 100);
  		}
  		indexes.push(newIndex);
  		data.push(this.state.WTData.items[newIndex]);
  	}
  	var currAnswer = Math.floor(Math.random() * (5));
  	console.log(data[0]);
  	this.setState({
  		"currentData": data,
  		"dataReady": true,
  		"currName": data[currAnswer].firstName + " " + data[currAnswer].lastName,
  		"currAnswer": currAnswer
  	});
  };
}

export default TimeTrial;
