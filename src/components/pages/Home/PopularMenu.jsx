import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionsTitle/SectionTitle';
import MenuItem from '../shared/MenuItem';

const PopularMenu = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch(`menu.json`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popularItem = data?.filter(pd => pd?.category === "popular")
                setMenus(popularItem)
            })
    }, [])
    // console.log(menus);
    return (
        <div>

            <SectionTitle subHeading={`Cheak it out Now`}
                heading={"Our Popular Item"}
            >

            </SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
                {
                    menus?.map(menu => <MenuItem
                        key={menu?._id}
                        menu={menu}
                    ></MenuItem>)
                }

            </div>

        </div>
    );
};

export default PopularMenu;