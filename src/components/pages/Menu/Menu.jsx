import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../shared/MenuCategory';
import SectionTitle from '../Home/SectionsTitle/SectionTitle';

import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"


const Menu = () => {
    const [menus] = useMenu();
    const dessert = menus?.filter(pd => pd?.category === "dessert")
    const salad = menus?.filter(pd => pd?.category === "salad")
    const pizza = menus?.filter(pd => pd?.category === "pizza")
    const offered = menus?.filter(pd => pd?.category === "offered")
    const soup = menus?.filter(pd => pd?.category === "soup")

    return (
        <div className='mb-12'>
            <Helmet>
                <title>Our Menu  | Rocky Boss </title>
            </Helmet>
            <Cover
                img={menuImg}
                title={`Our Menu`}

            ></Cover>

            {/* offerd item */}
            <SectionTitle
                subHeading={`DON'T MISS`}
                heading={`Today's Offer`}
            ></SectionTitle>
            <MenuCategory
                items={offered}

            ></MenuCategory>
            {/* desserts */}
            <MenuCategory
                title={`dessert`}
                img={dessertImg}
                items={dessert}

            ></MenuCategory>
            {/* pizzas */}
            <MenuCategory
                title={`pizza`}
                img={pizzaImg}
                items={pizza}

            ></MenuCategory>
            {/*salad */}
            <MenuCategory
                title={`salad`}
                img={saladImg}
                items={salad}

            ></MenuCategory>
            {/* soup */}
            <MenuCategory
                title={`soup`}
                img={soupImg}
                items={soup}

            ></MenuCategory>



        </div>
    );
};

export default Menu;