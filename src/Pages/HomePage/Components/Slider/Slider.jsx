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
    bgImage: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/category-page-mod-xps-13-9320-sl-left-800x620.png?fmt=png-alpha&wid=800&hei=620',
    bgColor: '9DA6B7'
  },
  {
    title: 'Inspiron Desktops & All-in-Ones',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/desktop/inspiron-category-page-800x620-wh-rf.png?fmt=png-alpha&wid=800&hei=620',
    bgColor: '1daadf',
  },
  {
    title: 'Alienware & Gaming Monitors',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa harum modi, amet consequatur neque, quas ea debitis reiciendis ratione ut blanditiis. Natus incidunt rem, autem praesentium facilis deleniti nostrum omnis!',
    bgImage: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/output-devices/dell/monitors/s-series/s2721qs/pdp/dell-gen-snp-consumer-high-definition-s2721qs_cfp_00025rf095_gy-800x620-left-facing_us.png?fmt=png-alpha&amp;wid=800&amp;hei=620',
    bgColor: '303133'
  },
]

export default function Slider() {

  return (
    <>

      <div className='slider'>
        <Swiper
          slidesPerView={1}
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
                <SwiperSlide key={index} className={'slider-wrapper'}>
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
