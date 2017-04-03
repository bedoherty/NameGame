/*
 *	Index.js
 *
 *	The entry point of the application.
 *
 *	Written by Brian Doherty
 */

//	Import React stuff
import React from 'react';
import ReactDOM from 'react-dom';

//	Import our components
import Window from './components/Window';

//	Import our styles
import './index.css';

ReactDOM.render(
  <Window />,
  document.getElementById('root')
);
