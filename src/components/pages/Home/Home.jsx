import React from 'react';
import Banner from './Banner';
import Slider from './Slider';
import PopularMenu from './PopularMenu';
import FeaturedItem from './featured/FeaturedItem';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Rocky Boss </title>
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;