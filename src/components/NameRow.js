import React, { Component } from 'react';
import '../styles/NameRow.css';

//  Importing components

//https://placehold.it/340x340
//	Importing custom graphics
import loading from '../assets/img/loading.gif'


class NameRow extends Component {

  constructor(props)
  {
  	super(props);
  }

  render() {
    return (
      <div className="picture-row-container">
        {this.props.dataReady ?
          (
            <div>
              <div  className={this.props.answerHints[0] ? "name-item" : "name-item hide"} onClick={this.props.callbacks[0]}>
                <div>{this.props.currentData[0].firstName}</div><div>{this.props.currentData[0].lastName}</div>
              </div>
              <div  className={this.props.answerHints[1] ? "name-item" : "name-item hide"} onClick={this.props.callbacks[1]}>
                <div>{this.props.currentData[1].firstName}</div><div>{this.props.currentData[1].lastName}</div>
              </div>
              <div  className={this.props.answerHints[2] ? "name-item" : "name-item hide"} onClick={this.props.callbacks[2]}>
                <div>{this.props.currentData[2].firstName}</div><div>{this.props.currentData[2].lastName}</div>
              </div>
              <div  className={this.props.answerHints[3] ? "name-item" : "name-item hide"} onClick={this.props.callbacks[3]}>
                <div>{this.props.currentData[3].firstName}</div><div>{this.props.currentData[3].lastName}</div>
              </div>
              <div  className={this.props.answerHints[4] ? "name-item" : "name-item hide"} onClick={this.props.callbacks[4]}>
                <div>{this.props.currentData[4].firstName}</div><div>{this.props.currentData[4].lastName}</div>
              </div>
            </div>
          )
          :
          (
            <div>
              <img src={loading} onClick={this.props.callbacks[0]} />
              <img src={loading} onClick={this.props.callbacks[1]} />
              <img src={loading} onClick={this.props.callbacks[2]} />
              <img src={loading} onClick={this.props.callbacks[3]} />
              <img src={loading} onClick={this.props.callbacks[4]} />
            </div>
          )
        }
      </div>
    );
  }
}

export default NameRow;
