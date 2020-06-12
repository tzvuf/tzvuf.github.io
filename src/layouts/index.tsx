import React, { FC, useState, Fragment } from 'react';
import { Button, Divider, Row, Col } from 'antd';
import { history, Link } from 'umi';
import styles from './index.less';

const config = [
  {
    name: '2号本',
    key: '1',
    url: '/p2',
  },
  {
    name: '口算视频练习',
    key: '2',
    url: '/p1',
  },
];

interface IProps {
  location: Location;
}
const Layouts: FC<IProps> = props => {
  const { children, location } = props;
  const { pathname } = location;
  const key = config.findIndex(v => v.url === pathname);
  const [active, setActive] = useState(key > -1 ? String(key + 1) : '1');
  console.log(pathname);
  return (
    <>
      <div className={styles.layouts + ' noprint'}>
        {!pathname.includes('/V0') &&
          config.map((v, vIdx) => {
            return (
              <Fragment key={v.key}>
                <Link to={v.url}>
                  <Button
                    type={v.key === active ? 'primary' : 'default'}
                    size="large"
                    onClick={() => setActive(v.key)}
                  >
                    {v.name}
                  </Button>
                </Link>
                {vIdx < config.length - 1 && <Divider type="vertical" />}
              </Fragment>
            );
          })}
        {pathname.includes('/V0') && (
          <Row justify="space-between" align="middle">
            <Col className="f18 b">历史版本</Col>
            <Col>
              <Button type="primary" size="large" onClick={history.goBack}>
                返回
              </Button>
            </Col>
          </Row>
        )}
      </div>
      <div>{children}</div>
    </>
  );
};
export default Layouts;
