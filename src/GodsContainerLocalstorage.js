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
    setTimeout(() => {
      let gods = localStorage.getItem('gods');
      gods = gods ? JSON.parse(gods) : [];
      this.setState({ isLoading: false, gods });
    }, 1000)
  }
  
  render() {
    const { gods, isLoading } = this.state;
    
    return (
      <div className="gods-2">
      {isLoading
        ? <div>Loading...</div>
        : <GodsPresentational gods={gods} />
      }
        
      </div>
    );
  }
}