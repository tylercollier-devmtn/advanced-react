import React, { Component } from 'react';

export default class RenderPropSwitch extends Component {
  constructor() {
    super();
    this.state = {
      isOn: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return this.props.children(this.toggle, this.state.isOn);
  }
}