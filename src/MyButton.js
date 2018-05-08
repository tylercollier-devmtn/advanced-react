import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.number,
};
