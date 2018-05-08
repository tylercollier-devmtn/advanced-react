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
import { Tabs, TabPane } from './TabStuff';

function SomeComponent(props) {
  return (
    <div>This is the SomeComponent component: {props.children()}</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key2="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key2="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key2="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
