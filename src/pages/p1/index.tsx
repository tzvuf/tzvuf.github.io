import React, { useState } from 'react';
import { getRandomComponent } from '@/utils';
import styles from '../index.less';
import Menu from '@/components/Menu';
import { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q14, Q15, Q16, Q17, Q18, Q20, Q21 } from '@/components/Question';

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
  console.log('p1');
  return (
    <>
      <Menu show={show} onRefaesh={handleRefaesh} onSetShow={handleSetShow} />
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
