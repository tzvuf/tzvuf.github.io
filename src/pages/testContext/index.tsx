import React, { Component, FC } from 'react';
import { Card } from 'antd';
import InputComp from '@/components/InputComp';
const { Provider, Consumer } = React.createContext('context');

interface IProps {
  onChange: (value: string) => void;
}

const CompA: FC<IProps> = ({ onChange }) => {
  return <Consumer>{value => <InputComp onChange={onChange} value={value} />}</Consumer>;
};

const CompB = () => {
  return (
    <Consumer>
      {value => {
        return (
          <Card bordered>
            <p>我是另外一个组件, 可以通过Context共享数据</p>
            <p>{value}</p>
          </Card>
        );
      }}
    </Consumer>
  );
};

export default class TestContext extends Component {
  state = {
    value: 'context',
  };

  handleChangeValue = (value: string) => {
    this.setState({ value });
  };

  render() {
    return (
      <Provider value={this.state.value}>
        <CompA onChange={this.handleChangeValue} />
        <CompB />
      </Provider>
    );
  }
}
