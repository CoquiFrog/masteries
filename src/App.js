import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      
        <p className="App backgroundcolor">
          Welcome to the application made by Paul
        </p>
        {router}
      </div>
    );
  }
}

export default App;
