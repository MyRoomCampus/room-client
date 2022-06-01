import React from 'react';
import { Carousel } from '@douyinfe/semi-ui';
import './style.css';

export default class HouseCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.imgList = [
      '/houseDetail/house-2.jpg',
      '/houseDetail/house-3.jpg',
      '/houseDetail/house-1.jpg',
    ];
    this.textList = [];
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

    const { activeIndex } = this.state;

    return (
      <div>
        <Carousel
          style={style}
          activeIndex={activeIndex}
          autoPlay={true}
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
              ></div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
