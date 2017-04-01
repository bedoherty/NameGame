import React, { Component } from 'react';
import '../styles/PictureRow.css';

//  Importing components

//https://placehold.it/340x340
//	Importing custom graphics
import loading from '../assets/img/loading.gif'


class PictureRow extends Component {

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
              <img src={this.props.currentData[0].headshot.url} onClick={this.props.callbacks[0]} alt={this.props.currentData[0].headshot.alt} />
              <img src={this.props.currentData[1].headshot.url} onClick={this.props.callbacks[1]} alt={this.props.currentData[1].headshot.alt} />
              <img src={this.props.currentData[2].headshot.url} onClick={this.props.callbacks[2]} alt={this.props.currentData[2].headshot.alt} />
              <img src={this.props.currentData[3].headshot.url} onClick={this.props.callbacks[3]} alt={this.props.currentData[3].headshot.alt} />
              <img src={this.props.currentData[4].headshot.url} onClick={this.props.callbacks[4]} alt={this.props.currentData[4].headshot.alt} />
            </div>
          )
          :
          (
            <div>
              <img src={loading} onClick={this.props.callbacks[0]} />
              <img src={loading} onClick={this.props.callbacks[0]} />
              <img src={loading} onClick={this.props.callbacks[0]} />
              <img src={loading} onClick={this.props.callbacks[0]} />
              <img src={loading} onClick={this.props.callbacks[0]} />
            </div>
          )
        }
      </div>
    );
  }
}

export default PictureRow;
