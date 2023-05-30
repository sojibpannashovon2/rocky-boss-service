import React from 'react';
import SectionTitle from '../SectionsTitle/SectionTitle';
import feature from "../../../../assets/home/featured.jpg"
import './Feature.css'
const FeaturedItem = () => {
    return (
        <section id='background' className='my-12 text-white bg-fixed'>
            <div className=' bg-black p-1 bg-opacity-30 w-11/12 '>

                <div className=" p-1 bg-opacity-30">
                    <SectionTitle
                        subHeading={`ReadY To Order`}
                        heading={`From Our Menu [Latest]`}
                    ></SectionTitle>
                </div>
                <div className='lg:flex w-3/4 mx-auto justify-center items-center gap-6'>
                    <div className='w-3/4'>
                        <img className='' src={feature} alt="" />
                    </div>
                    <div className='text-white w-2/4 text-justify'>
                        <h1 className='text-xl '>September 23, 2023</h1>
                        <h2>WHERE I CAN GET SOME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam porro molestiae amet perferendis modi pariatur nobis odio deleniti illum natus, est esse praesentium distinctio.</p>
                        <button className='btn btn-outline bg-amber-200 bg-opacity-30 btn-md border-0 border-b-2'>Order Now</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeaturedItem;