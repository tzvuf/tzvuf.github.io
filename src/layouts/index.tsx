import React, { FC } from 'react';
import { NavLink } from 'umi';
import styles from './index.less';

const Layouts: FC = ({ children }) => {
  return (
    <>
      <div className={styles.layouts}>
        <NavLink
          className={styles.link}
          to="/p1"
          activeClassName={styles.selected}
        >
          [ 2号本 ]
        </NavLink>
        <NavLink
          className={styles.link}
          to="/p2"
          activeClassName={styles.selected}
        >
          [ 口算视频练习 ]
        </NavLink>
      </div>
      <div>{children}</div>
    </>
  );
};
export default Layouts;
