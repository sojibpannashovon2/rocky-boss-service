import React from 'react';

const MenuItem = ({ menu }) => {

    const { price, name, image, recipe } = menu || {}
    return (
        <div className='lg:flex justify-center items-center gap-4'>
            <div>
                <img style={{ borderRadius: "0px 200px 200px 200px" }} className='w-56' src={image} alt="" />
            </div>
            <div>
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