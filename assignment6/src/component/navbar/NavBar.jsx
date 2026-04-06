import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({ cartCount = 0 }) => {
    return (
        <div className="navbar bg-white px-4 md:px-12 py-4 shadow-sm border-b border-gray-100">
            <div className="navbar-start">
                <a className="text-3xl font-bold text-[#7C3AED] cursor-pointer">
                    DigiTools
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-gray-700 font-medium">
                    <li><a className="hover:text-[#7C3AED]">Products</a></li>
                    <li><a className="hover:text-[#7C3AED]">Features</a></li>
                    <li><a className="hover:text-[#7C3AED]">Pricing</a></li>
                    <li><a className="hover:text-[#7C3AED]">Testimonials</a></li>
                    <li><a className="hover:text-[#7C3AED]">FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
                <button className="btn btn-ghost btn-circle relative">
                    <FiShoppingCart className="h-5 w-5 text-gray-700" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[#7C3AED] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 leading-none">
                            {cartCount}
                        </span>
                    )}
                </button>

                <a className="text-gray-700 font-medium hover:text-[#7C3AED] cursor-pointer hidden sm:block">
                    Login
                </a>

                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full px-8 normal-case">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default NavBar;
