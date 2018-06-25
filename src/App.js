import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Bottom from './Bottom.js'
//移动端兼容
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<Bottom />
      </MuiThemeProvider>
    );
  }
}

export default App;
