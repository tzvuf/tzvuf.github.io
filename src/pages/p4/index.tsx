/**
 * 10000内的整数加减
 */

import React, { useState } from 'react';
import styles from '../index.less';
import { List } from 'antd';
import Menu from '@/components/Menu';
import { Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34 } from '@/components/Question';
import { getRandomComponent } from '@/utils';

const fn1 = () => {
  return [
    [Q26],
    [Q26],
    [Q27],
    [Q28],
    [Q29],
    [Q30],
    [Q31],
    [Q32],
    [Q33],
    [Q34],
    // ...Array(1000).fill([Q30]),
  ].map(v => getRandomComponent(v));
};

export default () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState('');

  const [data_1, setData_1] = useState(fn1());
  // 刷新题目
  const handleRefaesh = () => {
    setShow(false);
    setRefresh(new Date().getTime() + '');
    setData_1(fn1);
  };

  // 显示隐藏答案
  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Menu show={show} onRefaesh={handleRefaesh} onSetShow={handleSetShow}></Menu>

      <div className={styles.content_1}>
        <List
          style={{ marginTop: 15 }}
          bordered
          dataSource={data_1}
          renderItem={(Comp, idx) => (
            <List.Item>
              <span className="gray">{idx + 1}.</span> <Comp show={show} refresh={refresh} />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
