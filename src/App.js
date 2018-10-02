import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Elephants from './Elephants';
// import GodsContainer from './GodsContainer';
// import GodsContainerLocalstorage from './GodsContainerLocalstorage';
import GodsPresentational from './GodsPresentational';
import axios from 'axios';

const GodsWithData = withData('https://apis.devmountain.com/gods/')(GodsPresentational);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Elephants count={7} />
        {/* <GodsContainer /> */}
        {/* <GodsContainerLocalstorage /> */}
        <GodsWithData />
      </div>
    );
  }
}

export default App;

function withData(url) {
  return function(WrappedComponent) {
    return class extends Component {
      state = {
        isLoading: false,
        data: null,
        error: null
      }
  
      componentDidMount() {
        this.setState({ isLoading: true })
        axios.get(url, {
          headers: {
            apikey: 'tylercollier'
          }
        }).then(response => {
          this.setState({ data: response.data, isLoading: false });
        }).catch(error => {
          console.log('-------------- error', error);
          this.setState({ error });
        });
      }
  
      render() {
        const { isLoading, data, error } = this.state;
        
        return <div>
          {error
            ? <div>Oh no! There was an error loading the data. Please try again later.</div>
            : (isLoading || !data)
              ? <div>Loading...</div>
              : <WrappedComponent gods={data} />
          }
        </div>
      }
    }
  }
}

