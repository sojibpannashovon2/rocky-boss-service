import React from 'react';
import Cover from './Cover';
import MenuItem from '../shared/MenuItem';


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {
                title && <Cover
                    title={title}
                    img={img}
                >

                </Cover>
            }

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-16'>
                {
                    items?.map(menu => <MenuItem
                        key={menu?._id}
                        menu={menu}

                    ></MenuItem>

                    )
                }

            </div>
            <div className='text-center my-5'>
                <button className='btn btn-outline bg-amber-200 bg-opacity-30 btn-md border-0 border-b-2 '>Order Your Favourite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;