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

export default () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState('');

  // 刷新题目
  const handleRefaesh = () => {
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
        <div className={styles.row}>
          1.{' '}
          {getRandomComponent([
            <Q1 show={show} refresh={refresh} />,
            <Q2 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          2.{' '}
          {getRandomComponent([
            <Q1 show={show} refresh={refresh} />,
            <Q2 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          3.{' '}
          {getRandomComponent([
            <Q3 show={show} refresh={refresh} />,
            <Q4 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          4.{' '}
          {getRandomComponent([
            <Q3 show={show} refresh={refresh} />,
            <Q4 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          5.{' '}
          {getRandomComponent([
            <Q5 show={show} refresh={refresh} />,
            <Q6 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          6.{' '}
          {getRandomComponent([
            <Q5 show={show} refresh={refresh} />,
            <Q6 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          7.{' '}
          {getRandomComponent([
            <Q7 show={show} refresh={refresh} />,
            <Q8 show={show} refresh={refresh} />,
            <Q9 show={show} refresh={refresh} />,
            <Q10 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          8.{' '}
          {getRandomComponent([
            <Q14 show={show} refresh={refresh} />,
            <Q15 show={show} refresh={refresh} />,
            <Q18 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          9.{' '}
          {getRandomComponent([
            <Q16 show={show} refresh={refresh} />,
            <Q21 show={show} refresh={refresh} />,
          ])}
        </div>
        <div className={styles.row}>
          10.{' '}
          {getRandomComponent([
            <Q17 show={show} refresh={refresh} />,
            <Q20 show={show} refresh={refresh} />,
          ])}
        </div>
      </div>
    </>
  );
};
