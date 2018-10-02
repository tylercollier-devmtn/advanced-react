import React, { Component } from 'react';
import axios from 'axios';
import GodsPresentational from './GodsPresentational';

export default class Gods extends Component {
  state = {
    gods: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get('https://apis.devmountain.com/gods/', {
      headers: {
        apikey: 'tylercollier'
      }
    }).then(response => {
      this.setState({ gods: response.data, isLoading: false });
      localStorage.setItem('gods', JSON.stringify(response.data));
    }).catch(error => {
      console.log('-------------- error', error);
    });
  }
  
  render() {
    const { gods, isLoading } = this.state;
    
    return (
      <div className="gods-1">
      {isLoading
        ? <div>Loading...</div>
        : <GodsPresentational gods={gods} />
      }
        
      </div>
    );
  }
}