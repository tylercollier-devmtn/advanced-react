import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Button from './Button';
import MyComponent from './MyComponent';
import { MyComponent as MyComponentBase } from './MyComponent';
import WithTime from './WithTime';
import Switch from './RenderPropSwitch';
import WithData from './WithData';

function SomeComponent(props) {
  return (
    <div>This is the SomeComponent component: {props.children()}</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <WithData WrappedComponent={MyComponentBase}>
          {(doFetch) => {
            return <button onClick={() => doFetch('someurl')}>Initiate fetch</button>
          }}
        </WithData>
      </div>
    );
  }
}

export default App;
