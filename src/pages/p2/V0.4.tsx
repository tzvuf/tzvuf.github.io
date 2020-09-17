import React, { useState } from 'react';
import { Link } from 'umi';
import styles from '../index.less';
import { List, Divider, Modal, Button } from 'antd';
import Menu from '@/components/Menu';
import { Q1, Q2, Q4, Q3, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25 } from '@/components/Question';
import { getRandomComponent } from '@/utils';

const fn1 = () => {
  return [
    [Q1, Q2],
    [Q3, Q4],
    [Q18, Q14, Q15, Q9],
    [Q8, Q10, Q17, Q19, Q20],
  ].map(v => getRandomComponent(v));
};

const fn2 = () => {
  return [
    [Q11, Q13],
    [Q12, Q13],
  ].map(v => getRandomComponent(v));
};

const fn3 = () => {
  return [
    [Q16, Q21],
    [Q18, Q14, Q15],
    [Q17, Q19, Q20],
  ].map(v => getRandomComponent(v));
};

const fn4 = () => {
  return [
    [Q5, Q6, Q7, Q19],
    [Q8, Q10],
    [Q3, Q20, Q22, Q23, Q24, ...Array(16).fill(Q25)],
  ].map(v => getRandomComponent(v));
};

export default () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState('');
  const [visible, setVisible] = useState(false);

  const [data_1, setData_1] = useState(fn1());
  const [data_2, setData_2] = useState(fn2());
  const [data_3, setData_3] = useState(fn3());
  const [data_4, setData_4] = useState(fn4());

  // 刷新题目
  const handleRefaesh = () => {
    setShow(false);
    setRefresh(new Date().getTime() + '');
    setData_1(fn1);
    setData_2(fn2);
    setData_3(fn3);
    setData_4(fn4);
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

  return (
    <>
      <Menu show={show} onRefaesh={handleRefaesh} onSetShow={handleSetShow}>
        <Divider type="vertical" />
        <span onClick={handleShowModal}>书写格式</span>
      </Menu>

      <div className={styles.content_1}>
        <List
          header={
            <div>
              <span className="f18">口算：</span>
              <span className="gray">一步计算和二步计算各2题</span>
            </div>
          }
          bordered
          dataSource={data_1}
          renderItem={(Comp, idx) => {
            return (
              <List.Item>
                <span className="gray">{idx + 1}.</span> <Comp show={show} refresh={refresh} />
              </List.Item>
            );
          }}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f18">括号里最大能填几：</span>
              <span className="gray">共2题</span>
            </div>
          }
          bordered
          dataSource={data_2}
          renderItem={(Comp, idx) => (
            <List.Item>
              <span className="gray">{data_1.length + idx + 1}.</span> <Comp show={show} refresh={refresh} />
            </List.Item>
          )}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f18">递等式计算：</span>
              <span className="gray">共3题</span>
            </div>
          }
          bordered
          dataSource={data_3}
          renderItem={(Comp, idx) => (
            <List.Item>
              <span className="gray">{data_1.length + data_2.length + idx + 1}.</span> <Comp show={show} refresh={refresh} />
            </List.Item>
          )}
        />

        <List
          style={{ marginTop: 15 }}
          header={
            <div>
              <span className="f18">笔算：</span>
              <span className="gray">能用简便写法1题，不能用简便写法2题</span>
            </div>
          }
          bordered
          dataSource={data_4}
          renderItem={(Comp, idx) => (
            <List.Item>
              <span className="gray">{data_1.length + data_2.length + data_3.length + idx + 1}.</span> <Comp show={show} refresh={refresh} />
            </List.Item>
          )}
        />
      </div>

      <Modal title="书写格式" visible={visible} onOk={handleHideModal} onCancel={handleHideModal} footer={null}>
        <div>
          <img src="/img/p3_1.jpg" style={{ maxWidth: '100%' }} />
        </div>
      </Modal>
    </>
  );
};
