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
