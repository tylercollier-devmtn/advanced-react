import React, { Component } from 'react';
import axios from 'axios';

export default class WithDataRenderProps extends Component {
  state = {
    isLoading: false,
    data: null
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(this.props.url, {
      headers: {
        apikey: 'tylercollier'
      }
    }).then(response => {
      this.setState({ data: response.data, isLoading: false });
    }).catch(error => {
      console.log('-------------- error', error);
    });
  }

  render() {
    const { isLoading, data } = this.state;
    const { children } = this.props;

    return <div>
      {(isLoading || !data)
        ? <div>Loading...</div>
        : children(data)
      }
    </div>
  }
}