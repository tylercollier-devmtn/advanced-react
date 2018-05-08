import React, { Component } from 'react';

export class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTabIndex: 0,
    }
  }

  render() {
    const tabToShow = null;
    const children = React.Children.toArray(this.props.children)
    return (
      <div>
        <nav>
          {children.map((x, i) => <button onClick={() => this.setState({ activeTabIndex: i })} key={x.props.key2}>{x.props.tab}</button>)}
        </nav>
        <div>{children[this.state.activeTabIndex]}</div>
      </div>
    )
  }
}

export class TabPane extends Component {
  render() {
    return (
      <div>{this.props.children}</div>      
    );
  }
}