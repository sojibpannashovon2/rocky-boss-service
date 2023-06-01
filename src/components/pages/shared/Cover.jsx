import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the food Babay"
            strength={-200}
        >
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div>
                            {details}
                        </div>
                        {/* <button className="btn btn-primary">Order Your Item</button> */}
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;