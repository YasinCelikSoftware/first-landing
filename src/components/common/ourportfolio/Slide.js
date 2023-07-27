import React, {Component} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFlip} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import p1 from '../../../images/portfolio1.jpg';
import p2 from '../../../images/portfolio2.jpg';
import p3 from '../../../images/portfolio3.jpg';
import p4 from '../../../images/portfolio4.jpg';
import p5 from '../../../images/portfolio5.jpg';
import './OurPortfolio.css';

// import p2 from '../../../images/images';
// import p3 from '../../../images/images';
// import p4 from '../../../images/images';
// import p5 from '../../../images/images';
// import p6 from '../../../images/images';
// import p7 from '../../../images/images';

export default class Slide extends Component {
  render () {
    return (
      <Swiper spaceBetween={100} slidesPerView={3}>
        <SwiperSlide>
          <div className="slide-div">
            <img
              src={p1}
              alt="a"
              width={'300px'}
              style={{borderRadius: '10px'}}
            />
            <div className="overlay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-div">
            <img
              src={p2}
              alt="a"
              width={'300px'}
              style={{borderRadius: '10px'}}
            />
            <div className="overlay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-div">
            <img
              src={p3}
              alt="a"
              width={'300px'}
              style={{borderRadius: '10px'}}
            />
            <div className="overlay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-div">
            <img
              src={p4}
              alt="a"
              width={'300px'}
              style={{borderRadius: '10px'}}
            />
            <div className="overlay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-div">
            <img
              src={p5}
              alt="a"
              width={'300px'}
              style={{borderRadius: '10px'}}
            />
            <div className="overlay" />
          </div>
        </SwiperSlide>

      </Swiper>
    );
  }
}
