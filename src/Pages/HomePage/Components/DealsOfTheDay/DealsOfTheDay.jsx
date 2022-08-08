import React, { useRef, useState } from 'react'
import './style.scss'
import Product from '../ProductSection/Product'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import useCounterDown from '../../../../Utils/CounterDown/CounterDown';

export default function DealsOfTheDay({ products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const time = useCounterDown("Aug 9, 2024 23:00:00")

  return (
    <div className='dealsOfTheDay'>
      <div className='dealsTime'>
        <h1>Deals of the Day</h1>
        <p>{time}</p>
      </div>

      <div className='dealsProducts'>
        <div className='deals'>
          <button ref={prevRef} className='beforeBtn'><NavigateBeforeIcon /></button>
          <button ref={nextRef} className='nextBtn'><NavigateNextIcon /></button>

          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}

            slidesPerView={1}
            spaceBetween={10}

            breakpoints={{

              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {
              products?.map(product => {
                const rate = Number(parseFloat(product.rating.rate).toFixed(0))
                return (
                  <SwiperSlide key={product.id}>
                    <Product product={product} rating={rate} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
