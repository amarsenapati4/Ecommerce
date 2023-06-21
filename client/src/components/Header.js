import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../img/REXdex copy.png'

const Header =()=>{
    return (
        <>
        
<nav className="fixed top-0 left-0 bg-white w-full shadow">
  <div className="container m-auto flex justify-between items-center text-gray-700">
    <img src={logo} alt={"logo"} className='pl-8 py-4 h-[5rem]'/>
     <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer uppercase text-[18px] leading-6 font-sans'>
      <NavLink className="hover:bg-gray-200 py-4 px-6">Home</NavLink>
      <NavLink className="hover:bg-gray-200 py-4 px-6">Register</NavLink>
      <NavLink className="hover:bg-gray-200 py-4 px-6">Login</NavLink>
      <NavLink className="hover:bg-gray-200 py-4 px-6">Cart(0)</NavLink>
     </ul>
  </div>
</nav>

        
        </>
    );
};
export default Header;