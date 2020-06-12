import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import styles from '../index.less';
import classNames from 'classnames';
import { handlePrint } from '@/utils';
import { getRandomComponent } from '@/utils';
import {
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q14,
  Q15,
  Q16,
  Q17,
  Q18,
  Q20,
  Q21,
} from '@/components/Question';

const fn = () => {
  return [
    [Q1, Q2],
    [Q1, Q2],
    [Q3, Q4],
    [Q3, Q4],
    [Q5, Q6],
    [Q5, Q6],
    [Q7, Q8, Q9, Q10],
    [Q14, Q15, Q18],
    [Q16, Q21],
    [Q17, Q20],
  ].map(v => getRandomComponent(v));
};

export default () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState('');
  const [data_1, setData_1] = useState(fn());

  // 刷新题目
  const handleRefaesh = () => {
    setData_1(fn());
    setShow(false);
    setRefresh(new Date().getTime() + '');
  };

  // 显示隐藏答案
  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={classNames(styles.link, styles.noprint)}>
        <span onClick={handlePrint}>【打印本页】</span>
        <span>&emsp;</span>
        <span onClick={handleSetShow}>【{show ? '隐藏' : '显示'}答案】</span>
        <span>&emsp;</span>
        <span onClick={handleRefaesh}>【重新出题】</span>
      </div>
      <div className={styles.content}>
        {data_1.map((Comp, idx) => {
          return (
            <div className={styles.row} key={idx}>
              {idx + 1}. <Comp show={show} refresh={refresh} />
            </div>
          );
        })}
      </div>
    </>
  );
};
