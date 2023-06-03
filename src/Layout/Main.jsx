import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer';
import Navbar from '../components/pages/shared/Navbar';

const Main = () => {
    const location = useLocation()
    // const withoutNavFooter = location.pathname.includes("login")
    const withoutNavFooter2 = location.pathname.includes("signin")
    return (
        <div>
            {
                withoutNavFooter2 || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                withoutNavFooter2 || <Footer></Footer>
            }
        </div>
    );
};

export default Main;