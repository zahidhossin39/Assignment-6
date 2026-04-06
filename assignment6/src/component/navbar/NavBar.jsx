import React from 'react';

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
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
