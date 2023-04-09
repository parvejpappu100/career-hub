import React from 'react';
import './Header.css'
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='bg-sky-50'>
            <div className="navbar lg:container mx-auto">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-50 rounded-box w-52">
                      <li><a>Statistics</a></li>
                      <li><a>Applied Jobs</a></li>
                      <li><a>Blog</a></li>
                    </ul>
                  </div>
                  <a className=" text-2xl font-bold">JobQuest</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li><a>Statistics</a></li>
                    <li><a>Applied Jobs</a></li>
                    <li><a>Blog</a></li>
                  </ul>
                </div>
                <div className="navbar-end">
                  <a className="btn btn-job-primary text-white font-semibold">Star Applying</a>
                </div>
            </div>
            <div className='lg:container mx-auto'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;