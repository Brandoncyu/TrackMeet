import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "TrackMeet"
  }


  render() {
    return (
      <Header />
    );
  }
}

export default App;
