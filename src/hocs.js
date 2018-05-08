import React, { Component } from 'react';

export function makeAwesome(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent isAwesome={true} {...this.props} />
    }
  }
};

export function withTime(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        time: 0
      }
    }

    componentDidMount() {
      setInterval(() => {
        console.log('-------------- this.state', this.state);
        this.setState(state => ({
          time: this.state.time + 1
        }))
      }, 1000)
    }

    render() {
      return <WrappedComponent time={this.state.time} {...this.props} />
    }
  }
};


function fakeAxios(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: { myValue: 7 }}), 1000);
  });
}

export function withData(WrappedComponent, url) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        data: null,
      }
    }
  
    componentDidMount() {
      fakeAxios('http://mydata.com/data').then(response => {
        this.setState({
          data: response.data
        });
      })
    }

    render() {
      return (
        <div>
          {this.state.data
            ? <WrappedComponent {...this.props} data={this.state.data} />
            : <div>Loading...</div>
          }
        </div>
      )
    }
  }
}