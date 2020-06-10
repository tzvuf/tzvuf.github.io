import React, { FC, useState, Fragment } from 'react';
import { Button, Divider } from 'antd';
import { NavLink, Link } from 'umi';
import styles from './index.less';

const config = [
  {
    name: '2号本',
    key: '1',
    url: '/p3',
  },
  {
    name: '2号本_V0.1',
    key: '2',
    url: '/p2',
  },
  {
    name: '口算视频练习',
    key: '3',
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

  return (
    <>
      <div className={styles.layouts + ' noprint'}>
        {config.map((v, vIdx) => {
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
      </div>
      <div>{children}</div>
    </>
  );
};
export default Layouts;
