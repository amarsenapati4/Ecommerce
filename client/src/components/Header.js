import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../img/REXdex copy.png'
import { FaShoppingCart} from "react-icons/fa";

const Header =()=>{
    return (
        <>
        
<nav className="fixed top-0 left-0 bg-lime-300 w-full shadow-2xl">
  <div className="container m-auto flex justify-between items-center text-gray-700">
    <img src={logo} alt={"logo"} className='pl-8 py-4 h-[5rem]'/>
     <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer uppercase text-[18px] leading-6 font-sans'>
      <NavLink to="/" className="hover:bg-gray-200 py-4 px-6 font-bold">Home</NavLink>
      <NavLink to="/Category" className="hover:bg-gray-200 py-4 px-6">Category</NavLink>
      <NavLink to="/register" className="hover:bg-gray-200 py-4 px-6">Register</NavLink>
      <NavLink to="/login" className="hover:bg-gray-200 py-4 px-6">Login</NavLink>
      <NavLink to="/cart" className="hover:bg-gray-200 py-4 px-6 flex justify-center items-center"><FaShoppingCart/>(0)</NavLink>
     </ul>
     <button className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
      <div className='w-5 h-1 bg-gray-600 mb-1'></div>
      <div className='w-5 h-1 bg-gray-600 mb-1'></div>
      <div className='w-5 h-1 bg-gray-600 mb-1'></div>
      <div className='absolute top-0 right-full h-screen w-8/12 bg-white shadow-2xl  border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
        <ul className='flex flex-col items-center w-full  text-base cursor-pointer pt-10 uppercase text-[18px] leading-6 font-sans'>
        <NavLink to="/" className="hover:bg-gray-200 py-4 px-6 w-full">Home</NavLink>
        <NavLink to="/Category" className="hover:bg-gray-200 py-4 px-6 w-full">Category</NavLink>
      <NavLink to="/register" className="hover:bg-gray-200 py-4 px-6 w-full">Register</NavLink>
      <NavLink to="/login" className="hover:bg-gray-200 py-4 px-6 w-full">Login</NavLink>
      <NavLink to="/cart" className="hover:bg-gray-200 py-4 px-6 w-full flex justify-center items-center text-[18px]"><FaShoppingCart/>(0)</NavLink>
        </ul>

      </div>
     </button>
  </div>
</nav>

        
        </>
    );
};
export default Header;