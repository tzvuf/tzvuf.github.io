import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import styles from '../index.less';

// 生成指定的随机数字
function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

// 从数组中随机取一位
function getRandomNumberForArr(arr: number[]) {
  const index = Math.floor(Math.random() * arr.length);
  console.log(arr, index);
  return arr[index];
}
// 客户端判断
export const clientType = () => {
  let sUserAgent = navigator.userAgent.toLowerCase() as any;
  let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
  let bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
  let bIsAndroid = sUserAgent.match(/android/i) == 'android';
  let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    return 'mobile';
  } else {
    return 'pc';
  }
};

interface IProps {
  show: boolean;
  refresh: string;
}

/**
 * 100以内的加法
 * 28 + 19 = ( 47 )
 */
const Fn1 = ({ show, refresh }: IProps) => {
  const min = 10;
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(min, max - min);
    const _n2 = getRandomNumberByRange(1, max - _n1);
    setN1(_n1);
    setN2(_n2);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} = ( <span className={styles.red}>{show ? n1 + n2 : ''}</span>{' '}
      )
    </span>
  );
};

/**
 * 100以内的减法
 *  80 - 34 = ( 46 )
 */

const Fn2 = ({ show, refresh }: IProps) => {
  const min = 20;
  const max = 100;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(min, max);
    const _n2 = getRandomNumberByRange(_n1, max);
    setN1(_n1);
    setN2(_n2);
  }, [refresh]);
  return (
    <span>
      {n2} - {n1} = ( <span className={styles.red}>{show ? n2 - n1 : ''}</span>{' '}
      )
    </span>
  );
};

/**
 * 多少减去 1-9乘法
 * 87 - 3 x 7 = ( 66 )
 */

const Fn3 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n2 = getRandomNumberByRange(2, 9);
    const _n3 = getRandomNumberByRange(2, 9);
    const _s1 = _n2 * _n3;
    const _n1 = getRandomNumberByRange(_s1, 99);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} - {n2} x {n3} = ({' '}
      <span className={styles.red}>{show ? n1 - n2 * n3 : ''}</span> )
    </span>
  );
};

/**
 * 10以内 先乘后除
 * 4 x 9  ÷ 6 = ( 6 )
 */
const Fn4 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(2, 9);
      const _n2 = getRandomNumberByRange(2, 9);
      const _s1 = _n1 * _n2;
      let _arr = [];
      for (let i = 1; i <= 9; i++) {
        if (_s1 % i === 0) {
          _arr.push(i);
        }
      }
      _arr = _arr.filter(
        v => _s1 / v < 10 && v > 1 && v !== _n1 && v !== _n2 && _s1 !== v,
      );
      const _n3 = getRandomNumberForArr(_arr);
      if (_n3) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} x {n2} ÷ {n3} = ({' '}
      <span className={styles.red}>{show ? (n1 * n2) / n3 : ''}</span> )
    </span>
  );
};

/**
 *  先减后乘
 * (52 - 47) x 6 = ( 30 )
 */
const Fn5 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(40, 90);
      // 此处只能取1-9之内 取 _n1 + 1 - _n1 + 9 之间 ，多取一个数字，复杂一些
      const _n2 = getRandomNumberByRange(_n1 + 2, _n1 + 9);
      const _n3 = getRandomNumberByRange(2, 9);
      if (_n3) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      ( {n2} - {n1} ) x {n3} = ({' '}
      <span className={styles.red}>{show ? (n2 - n1) * n3 : ''}</span> )
    </span>
  );
};

const handlePrint = () => {
  // 打印页面预览
  if (clientType() === 'pc') {
    window.print();
  } else {
    alert('使用电脑进行打印');
  }
};

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
      <div className={styles.link + ' ' + styles.noprint}>
        <span onClick={handlePrint}>【打印本页】</span>
        <span>&emsp;</span>
        <span onClick={handleSetShow}>【{show ? '隐藏' : '显示'}答案】</span>
        <span>&emsp;</span>
        <span onClick={handleRefaesh}>【重新出题】</span>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          1. <Fn1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          2. <Fn2 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          3. <Fn1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          4. <Fn2 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          5. <Fn1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          6. <Fn2 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          7. <Fn1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          8. <Fn3 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          9. <Fn4 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          10. <Fn5 show={show} refresh={refresh} />
        </div>
      </div>
    </>
  );
};
