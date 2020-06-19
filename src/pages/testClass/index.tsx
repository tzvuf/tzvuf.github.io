import React, { Component } from 'react';
import InputComp from '@/components/InputComp';

export default class TestClass extends Component {
  state = {
    value: 'CLASS',
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleChangeValue = (value: string) => {
    this.setState({ value });
  };

  render() {
    console.log('render');
    return <InputComp onChange={this.handleChangeValue} value={this.state.value} />;
  }
}
