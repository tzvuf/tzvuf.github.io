import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import { getRandomNumberByRange, getRandomNumberForArr } from '@/utils';
import { QuestionProps } from '@/type/global';
import styles from './index.less';

/**
 * 100以内的加法
 * 28 + 19 = ( 47 )
 */
export const Q1 = ({ show, refresh }: QuestionProps) => {
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
      {n1} + {n2} = ( <span className={styles.red}>{show ? n1 + n2 : ''}</span> )
    </span>
  );
};

/**
 * 100以内的减法
 *  80 - 34 = ( 46 )
 */
export const Q2 = ({ show, refresh }: QuestionProps) => {
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
      {n2} - {n1} = ( <span className={styles.red}>{show ? n2 - n1 : ''}</span> )
    </span>
  );
};

/**
 *
 * 1 - 9 以内除法
 * 36 ÷ 6 = ( 6 )
 */
export const Q3 = ({ show, refresh }: QuestionProps) => {
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
      {n1} ÷ {n2} = ( <span className={styles.red}>{show ? String(n1 / n2) : ''}</span> )
    </span>
  );
};

/**
 * 1 - 9 以内乘法
 *  7 * 9  = ( 63 )
 */
export const Q4 = ({ show, refresh }: QuestionProps) => {
  const min = 1;
  const max = 9;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(min, max);
    const _n2 = getRandomNumberByRange(min, max);
    setN1(_n1);
    setN2(_n2);
  }, [refresh]);
  return (
    <span>
      {n1} x {n2} = ( <span className={styles.red}>{show ? n2 * n1 : ''}</span> )
    </span>
  );
};

/**
 * 100内 连减
 * 52 - 24 - 22 = ( )
 */

export const Q5 = ({ show, refresh }: QuestionProps) => {
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
      {n1} - {n2} - {n3} = ( <span className={styles.red}>{show ? n1 - n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 100内 连加
 * 36 + 23 + 39 = ( )
 */
export const Q6 = ({ show, refresh }: QuestionProps) => {
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
      {n1} + {n2} + {n3} = ( <span className={styles.red}>{show ? n1 + n2 + n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内的混合加减 先加后减法
 * 67 + 14 - 2 = ( 79 )
 */
export const Q7 = ({ show, refresh }: QuestionProps) => {
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
      {n1} + {n2} - {n3} = ( <span className={styles.red}>{show ? n1 + n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内 混合加减 先加括号内 再减去
 * 57 - (38 + 6)
 */

export const Q8 = ({ show, refresh }: QuestionProps) => {
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
      {n3} - ({n1} + {n2}) = ( <span className={styles.red}>{show ? n3 - (n1 + n2) : ''}</span> )
    </span>
  );
};

/**
 * 100以内 混合加减 先减后加
 * 90 - 59 + 33 = 64
 */

export const Q9 = ({ show, refresh }: QuestionProps) => {
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(30, max);
    const _n2 = getRandomNumberByRange(10, _n1);
    const _s1 = _n1 - _n2;
    const _n3 = getRandomNumberByRange(1, max - _s1);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} - {n2} + {n3} = ( <span className={styles.red}>{show ? n1 - n2 + n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内 混合加减 先减括号内，再减
 * 73 - （39 - 35） = 64
 */
export const Q10 = ({ show, refresh }: QuestionProps) => {
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n2 = getRandomNumberByRange(50, max);
    const _n3 = getRandomNumberByRange(10, max - _n2);
    const _s1 = _n2 - _n3;
    const _n1 = getRandomNumberByRange(_s1 + 1, max);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} - ({n2} - {n3}) = ( <span className={styles.red}>{show ? String(n1 - (n2 - n3)) : ''}</span> )
    </span>
  );
};

/**
 * 10以内乘法 判断是否小于 填空
 * 8 x ( ) < 25
 */

export const Q11 = ({ show, refresh }: QuestionProps) => {
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
      {n2} x ( <span className={styles.red}>{show ? Math.floor(n1 / n2) : ''}</span> ) &lt; {n1}
    </span>
  );
};

/**
 * 10以内乘法 判断是否小于 填空
 * ( ) x 3 < 19
 */
export const Q12 = ({ show, refresh }: QuestionProps) => {
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
      ( <span className={styles.red}>{show ? String(Math.floor(n1 / n2)) : ''}</span> ) x {n2} &lt; {n1}
    </span>
  );
};

/**
 * 10以内乘法 判断是否大于 填空
 * 82 > 9 x ( )
 */
export const Q13 = ({ show, refresh }: QuestionProps) => {
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
      {n1} &gt; {n2} x ( <span className={styles.red}>{show ? Math.floor(n1 / n2) : ''}</span> )
    </span>
  );
};

/**
 * 1-9乘法 先乘 再减去小于81的数字
 * 3 x 7 - 5 = ( 16 )
 */
export const Q14 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(2, 9);
    const _n2 = getRandomNumberByRange(2, 9);
    const _s1 = _n1 * _n2;
    const _n3 = getRandomNumberByRange(2, _s1);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} x {n2} - {n3} = ( <span className={styles.red}>{show ? n1 * n2 - n3 : ''}</span> )
    </span>
  );
};

/**
 * 多少减去 1-9乘法
 * 87 - 3 x 7 = ( 66 )
 */
export const Q15 = ({ show, refresh }: QuestionProps) => {
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
      {n1} - {n2} x {n3} = ( <span className={styles.red}>{show ? n1 - n2 * n3 : ''}</span> )
    </span>
  );
};

/**
 * 10以内 先乘后除
 * 4 x 9  ÷ 6 = ( 6 )
 */
export const Q16 = ({ show, refresh }: QuestionProps) => {
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
      _arr = _arr.filter(v => _s1 / v < 10 && v > 1 && v !== _n1 && v !== _n2 && _s1 !== v);
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
      {n1} x {n2} ÷ {n3} = ( <span className={styles.red}>{show ? String((n1 * n2) / n3) : ''}</span> )
    </span>
  );
};

/**
 *  先减后乘
 * (52 - 47) x 6 = ( 30 )
 */
export const Q17 = ({ show, refresh }: QuestionProps) => {
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
      ( {n2} - {n1} ) x {n3} = ( <span className={styles.red}>{show ? (n2 - n1) * n3 : ''}</span> )
    </span>
  );
};

/**
 * 混合加乘
 * 60 + 7 x 2 = ( 74 )
 */
export const Q18 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n2 = getRandomNumberByRange(2, 9);
    const _n3 = getRandomNumberByRange(2, 9);
    const _s1 = _n2 * _n3;
    const _n1 = getRandomNumberByRange(10, 99 - _s1);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} x {n3} = ( <span className={styles.red}>{show ? n1 + n2 * n3 : ''}</span> )
    </span>
  );
};

/**
 * 10以内 先除后乘
 * 7 x (40  ÷ 5) = ( 56 )
 */
export const Q19 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    while (true) {
      const _n2 = getRandomNumberByRange(1, 99);
      const _n3 = getRandomNumberByRange(1, 9);
      const _s1 = _n2 / _n3;
      if (_n2 % _n3 === 0 && _s1 < 10 && _n1 * _s1 <= 81) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} x ( {n2} ÷ {n3} ) = ( <span className={styles.red}>{show ? String(n1 * (n2 / n3)) : ''}</span> )
    </span>
  );
};

/**
 *  先减后除
 * (82 - 58) ÷ 8 = ( 3 )
 */
export const Q20 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(50, 99);
      const _n2 = getRandomNumberByRange(10, 99 - _n1);
      const _s1 = _n1 - _n2;
      const _n3 = getRandomNumberByRange(2, 9);
      if (_s1 % _n3 === 0 && _s1 / _n3 < 10) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      ( {n1} - {n2} ) ÷ {n3} = ( <span className={styles.red}>{show ? String((n1 - n2) / n3) : ''}</span> )
    </span>
  );
};

/**
 * 10以内 先除后乘
 * 4 x 9  ÷ 6 = ( 6 )
 */
export const Q21 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, 81);
      const _n2 = getRandomNumberByRange(2, 9);
      const _n3 = getRandomNumberByRange(2, 9);
      if (_n1 % _n2 === 0 && _n1 / _n2 <= 9) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} ÷ {n2} x {n3} = ( <span className={styles.red}>{show ? String((n1 / n2) * n3) : ''}</span> )
    </span>
  );
};

/**
 *  先减后除
 * 48 ÷ (8 - 2) = ( 8 )
 */
export const Q22 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(10, 81);
      const _n3 = getRandomNumberByRange(1, 9);
      const _n2 = getRandomNumberByRange(_n3, 9);
      const _s1 = _n2 - _n3;
      if (_n1 % _s1 === 0 && _n1 / _s1 <= 9) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} ÷ ( {n2} - {n3} ) = ( <span className={styles.red}>{show ? String(n1 / (n2 - n3)) : ''}</span> )
    </span>
  );
};

/**
 *  先除后减
 * 72 - 18 ÷ 9 = ( 69 )
 */
export const Q23 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n2 = getRandomNumberByRange(10, 81);
      const _n3 = getRandomNumberByRange(1, 9);
      const _s1 = _n2 / _n3;
      if (_n2 % _n3 === 0 && _s1 <= 9) {
        const _n1 = getRandomNumberByRange(_n2 / _n3, 81);
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} - {n2} ÷ {n3} = ( <span className={styles.red}>{show ? String(n1 - n2 / n3) : ''}</span> )
    </span>
  );
};

/**
 *  先加后除
 * 24 ÷ (4 + 2) = ( 4 )
 */
export const Q24 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(1, 81);
      const _n2 = getRandomNumberByRange(1, 9);
      const _n3 = getRandomNumberByRange(1, 9);
      const _s1 = _n2 + _n3;
      if (_n1 % _s1 === 0 && _s1 <= 9) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} ÷ ( {n2} + {n3} ) = ( <span className={styles.red}>{show ? String(n1 / (n2 + n3)) : ''}</span> )
    </span>
  );
};

/**
 *
 * 带余数除法
 * 21 ÷ 4 = ( 5 )..... (1)
 */
export const Q25 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [n4, setN4] = useState(0);
  useEffect(() => {
    while (true) {
      const _n1 = getRandomNumberByRange(10, 81);
      const _n2 = getRandomNumberByRange(1, 9);
      const _n3 = Math.floor(_n1 / _n2);
      if (_n3 <= 9) {
        setN1(_n1);
        setN2(_n2);
        setN3(_n3);
        setN4(_n1 % _n2);
        break;
      }
    }
  }, [refresh]);
  return (
    <span>
      {n1} ÷ {n2} = (<span className={styles.red}>{show ? n3 : ''}</span> ) ..... (<span className={styles.red}>{show ? n4 : ''}</span> )
    </span>
  );
};

/**
 *
 * 100 内整数加法
 * 30 + 50 = ( 80 )
 */
export const Q26 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(1, 10 - _n1);
    setN1(_n1 * 10);
    setN2(_n2 * 10);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} = (<span className={styles.red}>{show ? n1 + n2 : ''}</span> )
    </span>
  );
};

/**
 *
 * 1000 内整数加法
 * 300 + 500 = ( 800 )
 */
export const Q27 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(1, 10 - _n1);
    setN1(_n1 * 100);
    setN2(_n2 * 100);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} = (<span className={styles.red}>{show ? n1 + n2 : ''}</span> )
    </span>
  );
};

/**
 *
 * 1000内整数加法
 * 130 + 50 = ( 80 )
 * 70 + 150 = ( 220 )
 */
export const Q28 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 99);
    const _n2 = getRandomNumberByRange(1, 99 - _n1);
    setN1(_n1 * 10);
    setN2(_n2 * 10);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} = (<span className={styles.red}>{show ? n1 + n2 : ''}</span> )
    </span>
  );
};

/**
 *
 * 10000 内整数加法
 * 3000 + 5000 = ( 8000 )
 */
export const Q29 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(1, 10 - _n1);
    setN1(_n1 * 1000);
    setN2(_n2 * 1000);
  }, [refresh]);
  return (
    <span>
      {n1} + {n2} = (<span className={styles.red}>{show ? n1 + n2 : ''}</span> )
    </span>
  );
};

/**
 *
 * 100 内整数减法
 * 350 - 230 = ( 120 )
 */
export const Q30 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 99);
    const _n2 = getRandomNumberByRange(_n1, 99);
    setN1(_n1 * 10);
    setN2(_n2 * 10);
  }, [refresh]);
  return (
    <span>
      {n2} - {n1} = (<span className={styles.red}>{show ? n2 - n1 : ''}</span> )
    </span>
  );
};

/**
 *
 * 100 内整数减法
 * 50 - 30 = ( 20 )
 */
export const Q31 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(_n1, 10);
    setN1(_n1 * 10);
    setN2(_n2 * 10);
  }, [refresh]);
  return (
    <span>
      {n2} - {n1} = (<span className={styles.red}>{show ? n2 - n1 : ''}</span> )
    </span>
  );
};

/**
 *
 * 1000 内减法
 * 500 - 300 = ( 200 )
 */
export const Q32 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(_n1, 10);
    setN1(_n1 * 100);
    setN2(_n2 * 100);
  }, [refresh]);
  return (
    <span>
      {n2} - {n1} = (<span className={styles.red}>{show ? n2 - n1 : ''}</span> )
    </span>
  );
};

/**
 *
 * 10000 内减法
 * 5000 - 3000 = ( 2000 )
 */
export const Q33 = ({ show, refresh }: QuestionProps) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(1, 9);
    const _n2 = getRandomNumberByRange(_n1, 10);
    setN1(_n1 * 1000);
    setN2(_n2 * 1000);
  }, [refresh]);
  return (
    <span>
      {n2} - {n1} = (<span className={styles.red}>{show ? n2 - n1 : ''}</span> )
    </span>
  );
};
