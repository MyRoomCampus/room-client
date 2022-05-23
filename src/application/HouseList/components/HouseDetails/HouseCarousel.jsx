import React from 'react';
import { Carousel, Space, Typography } from '@douyinfe/semi-ui';

export default class HouseCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.imgList = [
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
    ];
    this.textList = [
      [
        'Semi 设计管理系统',
        '从 Semi Design，到 Any Design',
        '快速定制你的设计系统，并应用在设计稿和代码中',
      ],
      [
        'Semi 物料市场',
        '面向业务场景的定制化组件，支持线上预览和调试',
        '内容由 Semi Design 用户共建',
      ],
      [
        'Semi Pro (开发中)',
        '基于 40+ 真实组件代码设计',
        '海量页面模板前端代码一键转',
      ],
    ];
    this.state = {
      activeIndex: 0,
    };
  }

  renderLogo() {
    return (
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg"
        alt="semi_logo"
        style={{ width: 87, height: 31 }}
      />
    );
  }

  onChange(activeIndex) {
    this.setState({ activeIndex });
  }

  render() {
    const style = {
      width: '100%',
      height: '400px',
    };

    const titleStyle = {
      position: 'absolute',
      top: '100px',
      left: '100px',
    };

    const colorStyle = {
      color: '#1C1F23',
    };

    const { activeIndex } = this.state;

    return (
      <div>
        <Carousel
          style={style}
          activeIndex={activeIndex}
          autoPlay={false}
          theme="dark"
          onChange={this.onChange.bind(this)}
        >
          {this.imgList.map((src, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${src})`,
                }}
              >
                <Space
                  vertical
                  align="start"
                  spacing="medium"
                  style={titleStyle}
                >
                  {this.renderLogo()}
                  <Typography.Title heading={2} style={colorStyle}>
                    {this.textList[index][0]}
                  </Typography.Title>
                  <Space vertical align="start">
                    <Typography.Paragraph style={colorStyle}>
                      {this.textList[index][1]}
                    </Typography.Paragraph>
                    <Typography.Paragraph style={colorStyle}>
                      {this.textList[index][2]}
                    </Typography.Paragraph>
                  </Space>
                </Space>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
