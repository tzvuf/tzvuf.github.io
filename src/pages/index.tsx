import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import styles from './index.less';

// 生成指定的随机数字
function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

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
 *
 * 10以内除法
 * 36 ÷ 6 = ( 6 )
 */
const Fn3 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, 81);
      const _n2 = getRandomNumberByRange(1, 9);
      if (_n1 % _n2 === 0) {
        if (_n1 / _n2 < 9) {
          setN1(_n1);
          setN2(_n2);
          break;
        }
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} ÷ {n2} = ( <span className={styles.red}>{show ? n1 / n2 : ''}</span>{' '}
      )
    </span>
  );
};

/**
 * 100以内的混合加减
 * 67 + 14 - 2 = ( 79 )
 */
const Fn4 = ({ show, refresh }: IProps) => {
  const max = 100;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, max - 1);
      const _n2 = getRandomNumberByRange(1, max - 1);
      const _n3 = getRandomNumberByRange(1, max - 1);
      const _s1 = _n1 + _n2;
      const _s2 = _s1 - _n3;
      if (_s1 < max && _s2 > 0 && _s2 < max) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} - {n3} = ({' '}
      <span className={styles.red}>{show ? n1 + n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 1-9乘法 减去小于81的数字
 * 3 x 7 - 5 = ( 16 )
 */

const Fn5 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(1, 9);
    const _s1 = _n1 * _n2;
    const _n3 = getRandomNumberByRange(1, _s1);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} x {n2} - {n3} = ({' '}
      <span className={styles.red}>{show ? n1 * n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内 先加后减算式
 * 57 - (38 + 6)
 */

const Fn6 = ({ show, refresh }: IProps) => {
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, max);
    const _n2 = getRandomNumberByRange(1, max - _n1);
    const _s1 = _n1 + _n2;
    const _n3 = getRandomNumberByRange(_s1 + 1, max);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n3} - ({n1} + {n2}) = ({' '}
      <span className={styles.red}>{show ? n3 - (n1 + n2) : ''}</span> )
    </span>
  );
};

/**
 * 10以内乘法 填空
 * 8 x ( ) = 25
 */

const Fn7 = ({ show, refresh }: IProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, 81);
      const _n2 = getRandomNumberByRange(1, 9);
      if (_n1 % _n2 === 0) {
        if (_n1 / _n2 <= 9) {
          setN1(_n1);
          setN2(_n2);
          break;
        }
      }
    }
  }, [refresh]);
  return (
    <span>
      {n2} x ( <span className={styles.red}>{show ? n1 / n2 : ''}</span> ) ={' '}
      {n1}
    </span>
  );
};

/**
 * 10以内乘法 判断是否大于 填空
 * 82 > 9 x ( )
 */
const Fn8 = ({ show, refresh }: IProps) => {
  const max = 89;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, max);
      const _n2 = getRandomNumberByRange(1, 9);
      if (_n1 % _n2 > 0 && _n1 / _n2 <= 9 && _n1 > _n2) {
        setN1(_n1);
        setN2(_n2);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} > {n2} x ({' '}
      <span className={styles.red}>{show ? Math.floor(n1 / n2) : ''}</span> )
    </span>
  );
};

/**
 * 10以内乘法 判断是否小于 填空
 * ( ) x 3 < 19
 */
const Fn9 = ({ show, refresh }: IProps) => {
  const max = 89;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, max);
      const _n2 = getRandomNumberByRange(1, 9);
      if (_n1 % _n2 > 0 && _n1 / _n2 <= 9 && _n1 > _n2) {
        setN1(_n1);
        setN2(_n2);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      ( <span className={styles.red}>{show ? Math.floor(n1 / n2) : ''}</span> )
      x {n2} &lt; {n1}
    </span>
  );
};

/**
 * 100内 连减
 * 52 - 24 - 22 = ( )
 */

const Fn10 = ({ show, refresh }: IProps) => {
  const min = 0;
  const mid = 50;
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(mid, max);
    const _n2 = getRandomNumberByRange(min + 1, _n1);
    const _n3 = getRandomNumberByRange(min + 1, _n1 - _n2);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} - {n2} - {n3} = ({' '}
      <span className={styles.red}>{show ? n1 - n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 100内 连加
 * 36 + 23 + 39 = ( )
 */
const Fn11 = ({ show, refresh }: IProps) => {
  const min = 0;
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(min, max);
      const _n2 = getRandomNumberByRange(min, max);
      const _n3 = getRandomNumberByRange(min, max);
      if (_n1 + _n2 + _n3 <= 99) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} + {n3} = ({' '}
      <span className={styles.red}>{show ? n1 + n2 + n3 : ''}</span> )
    </span>
  );
};

/**
 * 100内 加减混合
 * 72 - (33 + 29) = ( )
 */
const Fn12 = ({ show, refresh }: IProps) => {
  const min = 0;
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(min, max);
      const _n2 = getRandomNumberByRange(min, max);
      const _n3 = getRandomNumberByRange(min, max);
      const _n4 = _n2 + _n3;
      if (_n4 < max && _n1 - _n4 >= min) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} - ( {n2} + {n3} ) = ({' '}
      <span className={styles.red}>{show ? n1 - (n2 + n3) : ''}</span> )
    </span>
  );
};

// let arr = [];
// for (let i = 0; i < 1000; i++) {
//   // Fn10();
// }
// console.log(arr);

const handlePrint = () => {
  // 打印页面预览
  window.print();
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
        <span onClick={handleRefaesh}>【重新出题】</span>
        <span>&emsp;</span>
        <span onClick={handleSetShow}>【{show ? '隐藏' : '显示'}答案】</span>
        <span>&emsp;</span>
        <span onClick={handlePrint}>【打印本页】</span>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          1. <Fn1 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          2. <Fn2 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          3. <Fn3 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          4. <Fn4 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          5. <Fn5 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          6. <Fn6 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          7. <Fn7 show={show} refresh={refresh} />
        </div>
        {/* 大于 &gt;  */}
        <div className={styles.row}>
          8. <Fn8 show={show} refresh={refresh} />
        </div>
        {/* 小于 &lt;  */}
        <div className={styles.row}>
          9. <Fn9 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          10. <Fn10 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          11. <Fn11 show={show} refresh={refresh} />
        </div>
        <div className={styles.row}>
          12. <Fn12 show={show} refresh={refresh} />
        </div>
      </div>
    </>
  );
};
