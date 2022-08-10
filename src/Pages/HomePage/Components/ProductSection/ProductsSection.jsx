import React, { useRef } from 'react';
import Product from './Product';
import './style.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

export default function ProductsSection({ title, products }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    return (
        <div className='productsSection'>
            <div className='productTitle'>
                <h1>{title}</h1>
                <div className='productsBtn' >
                    <button ref={prevRef}><NavigateBeforeIcon /></button>
                    <button ref={nextRef}><NavigateNextIcon /></button>
                </div>
            </div>
            <div className='products'>

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
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {products &&
                        products.map(product => {
                            return(
                                <SwiperSlide key={product.id}>
                                    <Product product={product} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </div>
    )
}
