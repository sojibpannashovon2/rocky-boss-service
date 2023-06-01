import React from 'react';

import {
    createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../components/pages/Home/Home';
import Menu from '../components/pages/Menu/Menu';
import Order from '../components/oreder/Order';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
        ]
    },
]);