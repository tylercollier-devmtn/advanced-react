import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MyComponent from './MyComponent';
import WithTime from './WithTime';

function SomeComponent(props) {
  return (
    <div>This is the SomeComponent component: {props.children()}</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <MyButton />
        <MyComponent />
        <WithTime>
          {time => (<div>
            Here is the time: {time}
          </div>)}
        </WithTime>
        <SomeComponent>
          {() => 'Yo dude2'}
        </SomeComponent>
      </div>
    );
  }
}

export default App;
