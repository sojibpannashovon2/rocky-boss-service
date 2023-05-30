import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='my-12 text-center'>
            <p className='font-bold text-purple-600 mb-3'>----- {subHeading} -----</p>

            <h2 className='text-4xl font-bold border-t-4 w-fit mx-auto'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;