import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Button from './Button';
import MyComponent from './MyComponent';
import WithTime from './WithTime';
import Switch from './RenderPropSwitch';

function SomeComponent(props) {
  return (
    <div>This is the SomeComponent component: {props.children()}</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Click me!</Button>
        <Switch>
          {(toggle, isOn) => {
            return <div>
              <input type="checkbox" value={isOn} onChange={toggle} />
              The current value is {isOn ? 'true' : 'false'}
            </div>
          }}
        </Switch>
      </div>
    );
  }
}

export default App;
