import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { type } = this.props;

    function getStyle() {
      switch (type) {
        case 'danger':
          return {
            color: 'red',
            background: 'gray',
          }
        case 'default':
          return {
            color: 'gray',
            background: 'transparent',
          }
        case 'primary':
          return {
            color: 'white',
            background: '#216bff'
          }
      }
    }

    return (
      <button style={getStyle()}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['danger', 'dashed', 'primary', 'default'])
};
