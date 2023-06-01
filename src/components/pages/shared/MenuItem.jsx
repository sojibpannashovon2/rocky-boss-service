import React from 'react';

const MenuItem = ({ menu }) => {

    const { price, name, image, recipe } = menu || {}
    return (
        <div className='lg:flex justify-center items-center gap-4'>
            <div className='w-1/3'>
                <img style={{ borderRadius: "0px 170px 170px 170px" }} className='w-32 h-32' src={image} alt="" />
            </div>
            <div className='w-2/3'>
                <div className=''>
                    <span className='mr-16'>{name} .......................................</span>
                    <span className='text-yellow-400'>${price}</span>
                </div>
                <p>{recipe}</p>
            </div>

        </div>
    );
};

export default MenuItem;