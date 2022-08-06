import React from 'react'
import Slide from './Slide';
import './style.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";


const sliderData = [
  {
    title: 'XPS Laptops',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: 'https://dell.to/3oYVNi1',
    bgColor: '303133'
  },
  {
    title: 'Inspiron Desktops & All-in-Ones',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: 'https://dell.to/3BLAwQo',
    bgColor: '1daadf',
  },
  {
    title: 'Alienware & Gaming Monitors',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: 'https://dell.to/3JDNdyS',
    bgColor: '9DA6B7'
  },
]

export default function Slider() {

  return (
    <>

      <div className='slider'>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {
            sliderData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <Slide title={slide.title} info={slide.info} bgImage={slide.bgImage} bgColor={slide.bgColor} />
                </SwiperSlide>
              )
            })
          }

        </Swiper>

      </div>
    </>
  )
}
