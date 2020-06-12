import React, { useState, memo, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'umi';
import styles from '../index.less';
import { List, Divider, Modal } from 'antd';
import classNames from 'classnames';
import {
  Q2,
  Q4,
  Q3,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  Q13,
  Q18,
  Q19,
  Q20,
} from '@/components/Question';
import { handlePrint } from '@/utils';

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
    <Q2 show={show} refresh={refresh} />,
    <Q4 show={show} refresh={refresh} />,
    <Q3 show={show} refresh={refresh} />,
    <Q18 show={show} refresh={refresh} />,
    <Q8 show={show} refresh={refresh} />,
    <Q20 show={show} refresh={refresh} />,
  ];

  const data_2 = [
    <Q11 show={show} refresh={refresh} />,
    <Q13 show={show} refresh={refresh} />,
    <Q12 show={show} refresh={refresh} />,
  ];

  const data_3 = [
    <Q20 show={show} refresh={refresh} />,
    <Q18 show={show} refresh={refresh} />,
    <Q19 show={show} refresh={refresh} />,
  ];

  const data_4 = [
    <Q9 show={show} refresh={refresh} />,
    <Q10 show={show} refresh={refresh} />,
  ];

  return (
    <>
      <div className={classNames(styles.link, styles.noprint)}>
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
              <span className="f18">口算：</span>
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
              <span className="f18">括号里最大能填几：</span>
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
              <span className="f18">递等式计算：</span>
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
              <span className="f18">笔算：</span>
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
