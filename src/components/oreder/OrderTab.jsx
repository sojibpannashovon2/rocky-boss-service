import React from 'react';
import FoodCardOrder from '../FoodCardOrder/FoodCardOrder';

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {
                items?.map(item => <FoodCardOrder
                    key={item._id}
                    item={item}
                ></FoodCardOrder>)
            }
        </div>
    );
};

export default OrderTab;