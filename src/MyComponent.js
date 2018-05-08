import React, { Component } from 'react';
import { makeAwesome, withTime } from './hocs';

function fakeAxios(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: { myValue: 7 }}), 1000);
  });
}

class MyComponent extends Component {
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
          ? <div>Here is the data: {this.state.data.myValue}</div>
          : <div>Loading...</div>
        }
      </div>
    )
  }
}

export default MyComponent;
