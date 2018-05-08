import React, { Component } from 'react';
import { makeAwesome, withTime } from './hocs';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>
          Is this component awesome?
          {this.props.isAwesome ? 'You know it' : 'Nah'}
        </h2>
        <div>What time is it: {this.props.time}</div>
        <div>
          Here are all my props:
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default withTime(makeAwesome(MyComponent));
