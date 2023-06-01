import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../pages/shared/Cover';
import orderImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const catagories = ["dessert", "salad", "pizza", "soup"]
    const { category } = useParams();
    const initialIndex = catagories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(category);

    const [menus] = useMenu();
    const dessert = menus?.filter(pd => pd?.category === "dessert")
    const salad = menus?.filter(pd => pd?.category === "salad")
    const pizza = menus?.filter(pd => pd?.category === "pizza")
    // const drinks = menus?.filter(pd => pd?.category === "drinks")
    const soup = menus?.filter(pd => pd?.category === "soup")


    return (
        <div>
            <Helmet>
                <title>Order Menu || Rocky Boss</title>
            </Helmet>
            <Cover
                img={orderImg}
                title={`Our Shop`}
                details={`Would You Like To Try Our Dice`}
            ></Cover>
            {/* react tab */}
            <Tabs className="my-16 " defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Deserts</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Pizzas</Tab>
                    <Tab>Soup</Tab>
                </TabList>

                <TabPanel>

                    <OrderTab items={dessert}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;