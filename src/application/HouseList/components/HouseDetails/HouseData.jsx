import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import {
  FeedbackIcon,
  PublishInstitutionIcon,
  QualificationIcon,
} from './Icon';
import './index.css';

export default function HouseData() {
  return (
    <div className="part houseData">
      <Row className="padding-top-10">
        <Col xs={{ span: 6 }}>
          <span className="font-size-10 tag-span">楼龄新</span>
        </Col>
        <Col xs={{ span: 6 }}>
          <span className="font-size-10 tag-span">近地铁</span>
        </Col>
        <Col xs={{ offset: 6, span: 6 }}>
          <a href="https://www.google.com" className="link-style feedback">
            <div className="feedback-icon">
              <FeedbackIcon></FeedbackIcon>
            </div>
            <div className="feedback-icon">反馈</div>
          </a>
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ offset: 1, span: 6 }}>
          <span className="house-title">3室2厅</span>
        </Col>
        <Col xs={{ span: 8 }}>
          <span className="house-title">远洋山水</span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 8 }} className="publish-institution-icon">
          <PublishInstitutionIcon></PublishInstitutionIcon>
          <span className="padding-left-5">房源发布机构</span>
        </Col>
        <Col xs={{ offset: 1, span: 8 }} className="qualification-icon">
          <QualificationIcon></QualificationIcon>
          <span className="padding-left-5">相关资质</span>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 6 }}>
          <div className="border-right">
            <p className="highlight-attr-value">190万</p>
            <p className="highlight-attr-name padding-top-5">售价</p>
          </div>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <div className="border-right">
            <p className="highlight-attr-value">3室2厅</p>
            <p className="highlight-attr-name padding-top-5">房型</p>
          </div>
        </Col>
        <Col xs={{ offset: 1, span: 7 }}>
          <div>
            <p className="highlight-attr-value">108.99平</p>
            <p className="highlight-attr-name padding-top-5">建筑面积</p>
          </div>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">单价</span>
          <span className="attr-value">17592元/平</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">挂牌</span>
          <span className="attr-value">2020-12-23</span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">装修</span>
          <span className="attr-value">精装修</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">电梯</span>
          <span className="attr-value">有</span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">类型</span>
          <span className="attr-value">普通住宅</span>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">年代</span>
          <span className="attr-value">2019年</span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 12 }}>
          <span className="attr-name">小区</span>
          <span className="attr-value">西三旗 富力桃园</span>
        </Col>
        <Col xs={{ offset: 1, span: 9 }}>
          <span>
            <a href="https://www.google.com" className="link-style float-right">
              查看 {'>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">预算</span>
          <span className="attr-value">计算贷款金额</span>
        </Col>
        <Col xs={{ offset: 1, span: 10 }}>
          <span>
            <a href="https://www.google.com" className="link-style float-right">
              房贷计算器 {'>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 11 }}>
          <span className="attr-name">楼层</span>
          <span className="attr-value">高楼层/共18层</span>
        </Col>
        <Col xs={{ offset: 1, span: 10 }}>
          <span>
            <a href="https://www.google.com" className="link-style float-right">
              咨询楼层 {'>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 22 }}>
          <span className="attr-name">房屋核验码</span>
          <span className="attr-value">20210112hAEG7</span>
        </Col>
      </Row>
      <Row className="padding-top-20 padding-bottom-15">
        <Col xs={{ offset: 1, span: 22 }}>
          <div className="subscribe">
            <div className="subscribe-left">订阅房源动态，掌握一手信息</div>
            <div className="subscribe-right">
              <a href="https://www.google.com" className="link-style">
                去订阅
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
