import React, { Component } from 'react';
import axios from 'axios';

export default class Gods extends Component {
  state = {
    gods: [],
    isLoading: false,
  }

  updateName = val => {
    this.setState({ name: val });
  }
  
  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get('https://apis.devmountain.com/gods/', {
      headers: {
        apikey: 'tylercollier'
      }
    }).then(response => {
      this.setState({ gods: response.data, isLoading: false });
    }).catch(error => {
      console.log('-------------- error', error);
    });
  }
  
  render() {
    const { gods, isLoading } = this.state;
    
    return (
      <div className="gods">
      {isLoading
        ? <div>Loading...</div>
        : <div>{gods.map(e => {
          return <div>
            <div>{e.name}</div>
            <img src={e.image} />
          </div>
        })}</div>
      }
        
      </div>
    );
  }
}