import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from './SectionsTitle/SectionTitle';
const Slider = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"10:00am to 11:00pm"}
                heading={`Order Online`}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-8"
            >


                <SwiperSlide>
                    <img className='bg-opacity-30' src={slide1} alt="" />
                    <h3 className='text-center -mt-32 text-4xl font-bold text-white'>Salaad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='bg-opacity-30' src={slide2} alt="" />
                    <h3 className='text-center -mt-32 text-4xl font-bold text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-opacity-30' src={slide3} alt="" />
                    <h3 className='text-center -mt-32 text-4xl font-bold text-white'>Soup</h3></SwiperSlide>
                <SwiperSlide>
                    <img className='bg-opacity-30' src={slide4} alt="" />
                    <h3 className='text-center -mt-32 text-4xl font-bold text-white'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-opacity-30' src={slide5} alt="" />
                    <h3 className='text-center -mt-32 text-4xl font-bold text-white'>Salaad</h3>
                </SwiperSlide>

            </Swiper>
        </section>

    );
};

export default Slider;