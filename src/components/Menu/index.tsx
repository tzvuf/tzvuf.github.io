import React, { FC } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import { Fn } from '@/type/global';
import { Divider } from 'antd';
import { handlePrint } from '@/utils';

interface IProps {
  show: boolean;
  onSetShow: Fn;
  onRefaesh: Fn;
}
const Menu: FC<IProps> = ({ children, show, onSetShow, onRefaesh }) => {
  return (
    <div className={classNames(styles.link, styles.noprint)}>
      <span onClick={handlePrint}>打印本页</span>
      <Divider type="vertical" />
      <span onClick={onSetShow}>{show ? '隐藏' : '显示'}答案</span>
      <Divider type="vertical" />
      <span onClick={onRefaesh}>重新出题</span>
      {children}
    </div>
  );
};
export default Menu;
