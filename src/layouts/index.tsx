import React, { Component, Fragment, memo } from 'react';
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
  {
    name: '1万内整数运算',
    key: '3',
    url: '/p4',
  },
];

interface IProps {
  location: Location;
}

export default class Layouts extends Component<IProps> {
  state = {
    active: '1',
  };

  componentDidMount() {
    const key = config.findIndex(v => v.url === this.props.location.pathname);
    this.setActive(key > -1 ? String(key + 1) : '1');
  }

  setActive = (key: string) => {
    this.setState({ active: key });
  };

  render() {
    const { children, location } = this.props;
    const { pathname } = location;
    const { active } = this.state;
    return (
      <>
        <div className={styles.layouts + ' noprint'}>
          {!pathname.includes('/V0') &&
            !pathname.includes('/test') &&
            config.map((v, vIdx) => {
              return (
                <Fragment key={v.key}>
                  <Link to={v.url}>
                    <Button type={v.key === active ? 'primary' : 'default'} size="middle" onClick={() => this.setActive(v.key)}>
                      {v.name}
                    </Button>
                  </Link>
                  {vIdx < config.length - 1 && <Divider type="vertical" style={{ marginRight: 5, marginLeft: 5 }} />}
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
  }
}
