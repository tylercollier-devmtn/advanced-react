import React, { Component } from 'react';
import { makeAwesome, withTime, withData } from './hocs';


export class MyComponent extends Component {
  render() {
    return (
      <div>
        Here is the data: {this.props.data.myValue}
      </div>
    )
  }
}

export default withData(MyComponent, 'http://somedata.com/data');
