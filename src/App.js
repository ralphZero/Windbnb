import React, { Component } from 'react';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import StaysBar from './components/StaysBar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <StaysBar />
        <Grid />
      </div>
    );
  }

}

export default App;
