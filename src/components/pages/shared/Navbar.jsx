import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
const Navbar = () => {
    const { user, logout } = useContext(authContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logout()
            .then(() => {
                alert("Successfully LogOut")
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navOption = <>
        <li>
            <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/menu">Our Menu</Link>
        </li>
        <li>
            <Link to="/order/dessert">Order-Menu</Link>
        </li>
        {user ? <li onClick={handleLogOut} className='btn btn-outline btn-white bg-red-600 btn-md border-2 border-white text-white'>LogOut</li> :
            <li>
                <Link to="/login">Login</Link>
            </li>
        }
        <li>{user?.displayName}</li>

    </>
    return (

        <div className="navbar fixed z-10 bg-black text-white border rounded-lg shadow-sm max-w-6xl bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Rocky Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className='ml-3'>
                <Link to='/dashboard/mycart' className="btn  border-2 border-white">
                    <FaShoppingCart></FaShoppingCart>

                    <span className="badge badge-sm badge-secondary ml-2">+${cart?.length || 0} </span>

                </Link>
            </div>
        </div>

    );
};

export default Navbar;