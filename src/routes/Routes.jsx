import React from 'react';

import {
    createBrowserRouter,

} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../components/pages/Home/Home';
import Menu from '../components/pages/Menu/Menu';
import Order from '../components/oreder/Order';
import LogIn from '../components/pages/Logs/LogIn';
import Register from '../components/pages/Logs/Register';
import PrivateRoutes from './PrivateRoutes';

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
                element: <PrivateRoutes><Menu></Menu></PrivateRoutes>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "signin",
                element: <Register></Register>
            },
        ]
    },
]);