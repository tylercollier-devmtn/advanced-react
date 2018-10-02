import React, { Component } from 'react';

export default class GodsPresentational extends Component {
  render() {
    const { gods } = this.props;

    return (
      <div>{gods.map(e => {
        return <div>
            <div>{e.name}</div>
            <img src={e.image} />
          </div>
        }
      )}</div>
    );
  }
}