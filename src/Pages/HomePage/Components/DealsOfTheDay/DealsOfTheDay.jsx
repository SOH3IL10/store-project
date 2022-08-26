import React, { useRef, useState } from 'react'
import './style.scss'
import Product from '../ProductSection/Product'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import useCounterDown from '../../../../Utils/CounterDown/CounterDown';
import Grid from '@mui/material/Grid';

export default function DealsOfTheDay({ products, addToBasket, theme }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const time = useCounterDown("Aug 9, 2024 23:00:00")

  return (
    <Grid container className='dealsOfTheDay'>
      <Grid item xs={12} sm={12} md={3} lg={2} className='dealsTime'>
        <h1>Deals of the Day</h1>
        <p>{time}</p>
      </Grid>

      <Grid item xs={12} sm={9} md={9} lg={10} className='dealsProducts'>
        <div className='deals'>
          <button className={theme === 'dark' ? 'buttonDark boxShadowDark beforeBtn' : 'beforeBtn'} ref={prevRef} ><NavigateBeforeIcon /></button>
          <button className={theme === 'dark' ? 'buttonDark nextBtn boxShadowDark' : 'nextBtn'} ref={nextRef} ><NavigateNextIcon /></button>

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
                return (
                  <SwiperSlide key={product.id}>
                    <Product product={product} addToBasket={addToBasket} theme={theme} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </Grid>
    </Grid>
  )
}
