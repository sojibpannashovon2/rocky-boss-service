import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaStar, FaStarHalf, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from './SectionsTitle/SectionTitle';

const Testimonial = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:1000/reviews`)
            .then(res => res.json())
            .then(data =>
                setReview(data))

    }, [])

    // console.log(review);
    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={`What Our Client Say`}
                heading={`Testmonials`}
            ></SectionTitle>


            <Swiper

                navigation={true} modules={[Navigation]}
                className="mySwiper my-10"
            >

                {
                    review?.map(pd => <SwiperSlide
                        className='px-16'
                        key={pd._id}>
                        <div className='text-center'>
                            <div className='flex w-48 mx-auto'>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={pd.rating}
                                // onChange={setRating}
                                />
                            </div>
                            <br />
                            <div className='w-16 mx-auto text-6xl my-8'>
                                <FaQuoteLeft></FaQuoteLeft>
                            </div>

                            <br />
                            {pd.details}
                            <br />
                            <span >
                                <span className='text-yellow-500 font-bold'>{pd.name}</span>
                            </span>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonial;