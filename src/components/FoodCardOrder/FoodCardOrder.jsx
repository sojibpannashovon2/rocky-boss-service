import React from 'react';

const FoodCardOrder = ({ item }) => {

    const { price, name, image, recipe } = item || {}
    return (
        <div className="card  bg-base-100 shadow-xl  h-full border border-slate-400">
            <figure className=' '><img className='mt-5 w-72 h-64 border border-slate-400 rounded-xl' src={image} alt="Shoes" /></figure>
            <button className='btn btn-success btn-sm absolute  mt-3 right-5'>${price}</button>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCardOrder;