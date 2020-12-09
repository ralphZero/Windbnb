import React, { Component } from 'react';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import StaysBar from './components/StaysBar';
import json_data from './assets/stays.json';

class App extends Component {

  state = {
    data : null,
    count : 0
  }

  componentDidMount(){
    let json = JSON.stringify(json_data)
    let array = JSON.parse(json)
    this.setState({
      data : array,
      count : array.length
    })
  }

  onQuerySearch = (location, guestCount) => {
    const city = location.split(',');

    if(location){
      //location not null
      if(guestCount > 0){
        // query both
        const data = this.state.data.filter(obj => {
          return obj.maxGuests === guestCount && obj.city === city[0]
        })
        this.setState({
          data : data,
          count : data.length
        })
      }else{
        // query location
        const data = this.state.data.filter(obj => {
          return obj.city === city[0]
        })
        this.setState({
          data : data,
          count : data.length
        })
      }
    }else{
      //location null
      if(guestCount > 0){
        // query guest
        const data = this.state.data.filter(obj => {
          return obj.maxGuests === guestCount
        })
        this.setState({
          data : data,
          count : data.length
        })
      }else{
        // no search
        console.log('no query');
      }
    }
  }

  render() {
    return (
      <div className='global'>
        <Navbar onQuerySearch={this.onQuerySearch} />
        <div>
          <StaysBar count={this.state.count} />
          <Grid data={this.state.data}/>
        </div>
        <div className='footer'>Ralph Placide @DevChallenges</div>
      </div>
    );
  }

}

export default App;
