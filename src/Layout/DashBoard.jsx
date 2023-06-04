import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    FaShoppingCart,
    FaWallet,
    FaHome,
    FaCalendar,


    FaShoppingBag,
    FaThList

} from "react-icons/fa";
import useCart from '../hooks/useCart';

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer lg:flex  ">
            {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
            <div className="drawer-content lg:w-[70%] overflow-y-auto">
                {/* <label htmlFor="my-drawer" className="btn btn-primary btn-outline drawer-button">Open-Side-Bar</label> */}
                {/* Page content here */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side lg:w-[25%] ml-4 mr-2 h-full ">
                {/* <label htmlFor="my-drawer" className="drawer-overlay"></label> */}

                <ul className="menu p-8 w-80 h-full  text-base-content  border-2 border-black rounded-md shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
                    {/* Sidebar content here */}

                    <h1 className='font-bold text-4xl text-white'>Rocky-Boss</h1>
                    <h1 className='font-bold text-2xl  text-white'>Restaurent</h1>

                    <li>
                        <NavLink to="/dashboard/home">
                            <FaHome></FaHome>
                            <strong>User Home</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mycart">
                            <FaShoppingCart></FaShoppingCart>
                            <strong>My Cart</strong><span className='btn btn-error bg-white btn-sm'>+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reserve">
                            <FaCalendar></FaCalendar>
                            <strong>Reservation</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet></FaWallet>
                            <strong>Payment History</strong>
                        </NavLink>
                    </li>
                    <hr className='my-2 ' />
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            <strong>Home</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaThList></FaThList>
                            <strong>Menu</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/dessert">
                            <FaShoppingBag></FaShoppingBag>
                            <strong>Order Food</strong>
                        </NavLink>
                    </li>






                </ul>
            </div>
        </div>
    );
};

export default DashBoard;