import React, {Component} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import {Col} from 'reactstrap';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Testimonial.css';

export default class TestimonialContent extends Component {
  render () {
    return (
      <Col md="6">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          pagination={{clickable: true}}
        >
          <SwiperSlide>
            <h6>John Doe</h6>
            <p style={{color: '#fd8070'}}>Manager</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque accusantium ex exercitationem vero distinctio et quaerat non quod placeat obaecati cnsectetur.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h6>John Doe</h6>
            <p style={{color: 'red'}}>Manager</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque accusantium ex exercitationem vero distinctio et quaerat non quod placeat obaecati cnsectetur.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h6>John Doe</h6>
            <p style={{color: 'red'}}>Manager</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque accusantium ex exercitationem vero distinctio et quaerat non quod placeat obaecati cnsectetur.
            </p>
          </SwiperSlide>

        </Swiper>

      </Col>
    );
  }
}
