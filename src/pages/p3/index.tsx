import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import styles from '../index.less';
import { List, Divider, Modal } from 'antd';

// 生成指定的随机数字
function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

// 从数组中随机取一位
function getRandomNumberForArr(arr: number[]) {
  const index = Math.floor(Math.random() * arr.length);
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
 * 100以内的减法
 *  80 - 34 = ( 46 )
 */

const Fn1 = ({ show, refresh }: IProps) => {
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
 * 10以内乘法
 *  7 * 9  = ( 63 )
 */

const Fn2 = ({ show, refresh }: IProps) => {
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
      {n1} x {n2} = ( <span className={styles.red}>{show ? n2 * n1 : ''}</span>{' '}
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
      {n1} ÷ {n2} = (
      <span className={styles.red}>{show ? String(n1 / n2) : ''}</span>)
    </span>
  );
};

/**
 * 多少加 1-9乘法
 * 60 + 7 x 2 = ( 74 )
 */

const Fn4 = ({ show, refresh }: IProps) => {
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
      {n1} + {n2} x {n3} = ({' '}
      <span className={styles.red}>{show ? n1 + n2 * n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内 先加后减算式
 * 57 - (38 + 6)
 */

const Fn5 = ({ show, refresh }: IProps) => {
  const max = 99;
  const mid = 40;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(10, mid);
    const _n2 = getRandomNumberByRange(10, 60 - _n1);
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
 *  先减后除
 * (82 - 58) ÷ 8 = ( 3 )
 */
const Fn6 = ({ show, refresh }: IProps) => {
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
      ( {n1} - {n2} ) ÷ {n3} = ({' '}
      <span className={styles.red}>{show ? String((n1 - n2) / n3) : ''}</span> )
    </span>
  );
};

/**
 * 10以内乘法 判断是否小于 填空
 * 3 x () < 19
 */
const Fn7 = ({ show, refresh }: IProps) => {
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
      {n2} x ({' '}
      <span className={styles.red}>
        {show ? String(Math.floor(n1 / n2)) : ''}
      </span>{' '}
      ) &lt; {n1}
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
      <span className={styles.red}>
        {show ? String(Math.floor(n1 / n2)) : ''}
      </span>{' '}
      )
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
      ({' '}
      <span className={styles.red}>
        {show ? String(Math.floor(n1 / n2)) : ''}
      </span>{' '}
      ) x {n2} &lt; {n1}
    </span>
  );
};

/**
 * 10以内 先除后乘
 * 7 x (40  ÷ 5) = ( 56 )
 */
const Fn10 = ({ show, refresh }: IProps) => {
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
      {n1} x ( {n2} ÷ {n3} ) = ({' '}
      <span className={styles.red}>{show ? String(n1 * (n2 / n3)) : ''}</span> )
    </span>
  );
};

/**
 * 100以内 混合加减 先减后加
 * 90 - 59 + 33 = 64
 */

const Fn11 = ({ show, refresh }: IProps) => {
  const max = 99;
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  useEffect(() => {
    const _n1 = getRandomNumberByRange(30, max);
    const _n2 = getRandomNumberByRange(10, max - _n1);
    const _s1 = _n1 - _n2;
    const _n3 = getRandomNumberByRange(1, max - _s1);
    setN1(_n1);
    setN2(_n2);
    setN3(_n3);
  }, [refresh]);
  return (
    <span>
      {n1} - {n2} + {n3} = ({' '}
      <span className={styles.red}>{show ? n1 - n2 + n3 : ''}</span> )
    </span>
  );
};

/**
 * 100以内 混合加减 先减括号内，再减
 * 73 - （39 - 35） = 64
 */

const Fn12 = ({ show, refresh }: IProps) => {
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
      {n1} - ({n2} - {n3}) = ({' '}
      <span className={styles.red}>{show ? String(n1 - (n2 - n3)) : ''}</span> )
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
  const [visible, setVisible] = useState(false);

  // 刷新题目
  const handleRefaesh = () => {
    setShow(false);
    setRefresh(new Date().getTime() + '');
  };

  // 显示隐藏答案
  const handleSetShow = () => {
    setShow(!show);
  };

  const handleShowModal = () => {
    setVisible(true);
  };

  const handleHideModal = () => {
    setVisible(false);
  };

  const data_1 = [
    <Fn1 show={show} refresh={refresh} />,
    <Fn2 show={show} refresh={refresh} />,
    <Fn3 show={show} refresh={refresh} />,
    <Fn4 show={show} refresh={refresh} />,
    <Fn5 show={show} refresh={refresh} />,
    <Fn6 show={show} refresh={refresh} />,
  ];

  const data_2 = [
    <Fn7 show={show} refresh={refresh} />,
    <Fn8 show={show} refresh={refresh} />,
    <Fn9 show={show} refresh={refresh} />,
  ];

  const data_3 = [
    <Fn6 show={show} refresh={refresh} />,
    <Fn4 show={show} refresh={refresh} />,
    <Fn10 show={show} refresh={refresh} />,
  ];

  const data_4 = [
    <Fn11 show={show} refresh={refresh} />,
    <Fn12 show={show} refresh={refresh} />,
  ];

  return (
    <>
      <div className={styles.link + ' ' + styles.noprint}>
        <span onClick={handlePrint}>打印本页</span>
        <Divider type="vertical" />
        <span onClick={handleSetShow}>{show ? '隐藏' : '显示'}答案</span>
        <Divider type="vertical" />
        <span onClick={handleRefaesh}>重新出题</span>
        <Divider type="vertical" />
        <span onClick={handleShowModal}>书写格式</span>
      </div>
      <div className={styles.content_1}>
        <List
          header={
            <div>
              <span className="f20">口算：</span>
              <span className="gray">一步计算和二步计算各3题</span>
            </div>
          }
          bordered
          dataSource={data_1}
          renderItem={(item, idx) => (
            <List.Item>
              <span className="gray">{idx + 1}.</span> {item}
            </List.Item>
          )}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f20">括号里最大能填几：</span>
              <span className="gray">共3题</span>
            </div>
          }
          bordered
          dataSource={data_2}
          renderItem={(item, idx) => (
            <List.Item>
              <span className="gray">{data_1.length + idx + 1}.</span> {item}
            </List.Item>
          )}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f20">递等式计算：</span>
              <span className="gray">共3题</span>
            </div>
          }
          bordered
          dataSource={data_3}
          renderItem={(item, idx) => (
            <List.Item>
              <span className="gray">
                {data_1.length + data_2.length + idx + 1}.
              </span>{' '}
              {item}
            </List.Item>
          )}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f20">笔算：</span>
              <span className="gray">能用简便写法和不能用简便写法的各1题</span>
            </div>
          }
          bordered
          dataSource={data_4}
          renderItem={(item, idx) => (
            <List.Item>
              <span className="gray">
                {data_1.length + data_2.length + data_3.length + idx + 1}.
              </span>{' '}
              {item}
            </List.Item>
          )}
        />
      </div>

      <Modal
        title="书写格式"
        visible={visible}
        onOk={handleHideModal}
        onCancel={handleHideModal}
        footer={null}
      >
        <div>
          <img src="/img/p3_1.jpg" style={{ maxWidth: '100%' }} />
        </div>
      </Modal>
    </>
  );
};
