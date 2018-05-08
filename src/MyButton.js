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
  text: PropTypes.string,
  value: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    c: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

MyButton.defaultProps = {
  text: 'Click here'
}


// value {
//   a: number,
//   b: string,
//   c: array
// }