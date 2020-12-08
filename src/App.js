import React, { Component } from 'react';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import StaysBar from './components/StaysBar';
import json_data from './assets/stays.json';

class App extends Component {

  state = {
    data : null
  }

  componentDidMount(){
    let json = JSON.stringify(json_data)
    let array = JSON.parse(json)
    this.setState({
      data : array
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <StaysBar />
        <Grid data={this.state.data}/>
      </div>
    );
  }

}

export default App;
