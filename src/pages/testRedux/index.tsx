import React, { Component } from 'react';
import { connect, Dispatch } from 'dva';
import InputComp from '@/components/InputComp';

interface IProps {
  dispatch: Dispatch;
  value: string;
  one: string;
  two: string;
  thr: string;
}

class TestRedux extends Component<IProps> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'global/pageInit',
      callback: () => {
        const { one, two, thr } = this.props;
        console.log('componentDidMount', one, two, thr);
      },
    });
  }

  handleChangeValue = (value: string) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/updateValue',
      payload: value,
    });
  };
  render() {
    const { value, one, two, thr } = this.props;
    return (
      <>
        <div>
          {one} {two} {thr}
        </div>
        <InputComp onChange={this.handleChangeValue} value={value} one={one} />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  value: state.global.value,
  ...state.global,
});

export default connect(mapStateToProps)(TestRedux);
