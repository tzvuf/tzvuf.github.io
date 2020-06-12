import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import styles from '../index.less';
import classNames from 'classnames';
import { handlePrint } from '@/utils';
import {
  Q1,
  Q2,
  Q3,
  Q5,
  Q6,
  Q7,
  Q8,
  Q11,
  Q12,
  Q13,
  Q14,
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
          1. <Q1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          2. <Q2 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          3. <Q3 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          4. <Q7 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          5. <Q14 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          6. <Q8 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          7. <Q11 show={show} refresh={refresh} />
        </div>
        {/* 大于 &gt;  */}
        <div className={styles.row}>
          8. <Q13 show={show} refresh={refresh} />
        </div>
        {/* 小于 &lt;  */}
        <div className={styles.row}>
          9. <Q12 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          10. <Q5 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          11. <Q6 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          12. <Q8 show={show} refresh={refresh} />
        </div>
      </div>
    </>
  );
};
