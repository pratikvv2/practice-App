//  import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

//  import required modules
import { Pagination } from 'swiper/modules';

  

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img alt="1" src='https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/service-cost-calculator.jpg'/></SwiperSlide>
        <SwiperSlide><img alt="2" src='https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/new/rentals-tours.jpg'/></SwiperSlide>
        <SwiperSlide><img alt="3" src='https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/reown.jpg'/></SwiperSlide>
        <SwiperSlide><img alt="4" src='https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/shotgun-650/desktop/royal-enfield-wingman.jpg'/></SwiperSlide>
        <SwiperSlide><img alt="5" src='https://www.royalenfield.com/content/dam/royal-enfield/india/finance/banner/desktop/assured-buyback.jpg'/></SwiperSlide>
        <SwiperSlide><img alt="6" src='https://www.royalenfield.com/content/dam/royal-enfield/gtcup-2024/gt-cup-2024.png'/></SwiperSlide>
      </Swiper>
    </>
  );
}