import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

//AppSync and Apollo libraries
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Components
import AllNotes from "./Components/AllNotes";
import AddNote from "./Components/AddNote";

Amplify.configure(awsconfig);

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AWS Amplify with AWS AppSync Sample using Complex Objects </h1>
        </header>
        <div className="App-content">
          <AddNote />
          <AllNotes />
        </div>
      </div>
    );
  }
}
