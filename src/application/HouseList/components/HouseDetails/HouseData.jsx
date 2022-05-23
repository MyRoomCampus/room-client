import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseData() {
  return (
    <div className="part houseData">
      <Row gutter={[0, 0]} className="line line-1">
        <Col xs={{ offset: 1, span: 4 }}>
          <span>楼龄新</span>
        </Col>
        <Col xs={{ offset: 1, span: 4 }}>
          <span>近地铁</span>
        </Col>
        <Col xs={{ offset: 10, span: 4 }}>
          <span>反馈</span>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-2">
        <Col xs={{ offset: 1, span: 7 }}>
          <span>3室2厅</span>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <span>远洋山水</span>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-3">
        <Col xs={{ offset: 1, span: 7 }}>
          <img src="" alt="" />
          <span>房源发布机构</span>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <img src="" alt="" />
          <span>相关资质</span>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-4">
        <Col xs={{ offset: 1, span: 7 }}>
          <div className="border-right">
            <p>190万</p>
            <p>售价</p>
          </div>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <div className="border-right">
            <p>3室2厅</p>
            <p>房型</p>
          </div>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <div className="border-none">
            <p>108.99平</p>
            <p>建筑面积</p>
          </div>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-5">
        <Col xs={{ offset: 1, span: 11 }}>
          <span>单价</span>
          <span>17592元/平</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span>挂牌</span>
          <span>2020-12-23</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span>装修</span>
          <span>精装修</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span>电梯</span>
          <span>有</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span>类型</span>
          <span>普通住宅</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span>年代</span>
          <span>2019年</span>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-6">
        <Col xs={{ offset: 1, span: 23 }}>
          <span>小区</span>
          <span>西三旗 富力桃园</span>
          <span>
            <a href="https://www.google.com"> {'>'}</a>
          </span>
        </Col>
        <Col xs={{ offset: 1, span: 23 }}>
          <span>预算</span>
          <span>计算贷款金额</span>
          <span>
            <a href="https://www.google.com">房贷计算器 {'>'}</a>
          </span>
        </Col>
        <Col xs={{ offset: 1, span: 23 }}>
          <span>楼层</span>
          <span>高楼层/共18层</span>
          <span>
            <a href="https://www.google.com">咨询楼层 {'>'}</a>
          </span>
        </Col>
        <Col xs={{ offset: 1, span: 23 }}>
          <span>房屋核验码</span>
          <span>20210112hAEG7</span>
          <span></span>
        </Col>
      </Row>
      <Row gutter={[0, 0]} className="line line-7">
        <Col xs={{ offset: 1, span: 23 }}>
          <div className="subscribe">
            <div style={{ width: 'fit-content', marginRight: 10 }}>
              订阅房源动态，掌握一手信息
            </div>
            <div>去订阅</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
