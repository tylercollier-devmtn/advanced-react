import React, { Component } from 'react';

function fakeAxios(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: { myValue: 7 }}), 1000);
  });
}

export default class WithData extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }
    this.doFetch = this.doFetch.bind(this);
  }

  doFetch() {
    fakeAxios('http://mydata.com/data').then(response => {
      this.setState({
        data: response.data
      });
    })
  }

  render() {
    const { WrappedComponent } = this.props;
    return (
      <div>
        {this.state.data
          ? <WrappedComponent {...this.props} data={this.state.data} />
          : this.props.children(this.doFetch)
        }
      </div>
    )
  }
}