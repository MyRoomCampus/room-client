import React from 'react';
import { Row, Col, Card } from '@douyinfe/semi-ui';
import { Link } from 'react-router-dom';
import './style.css';

export default function HomeCard() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        <Link to="/houseDetails">
          <Card title="碧桂园" bordered={false}>
            三室一厅
          </Card>
        </Link>
      </Col>
    </Row>
  );
}
