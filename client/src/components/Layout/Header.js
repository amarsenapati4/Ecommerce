import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from './REXdex copy.png'
import { FaShoppingCart} from "react-icons/fa";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../Context/auth';
import toast from "react-hot-toast";
import SearchInput from '../Form/SearchInput';


const Header =()=>{
    const [auth,setAuth]=useAuth();
    const handelLogout=()=>{
        setAuth({
            ...auth,
            user:null,
            token:''
        })
        localStorage.removeItem("auth");
        setTimeout(()=>{
            toast.success("Logout Successful");
},"1000");
    }
  let Links =[
    {name:"HOME",link:"/"},
    {name:"Category",link:"/category"},
    {name:"Register",link:"/register"},
    {name:"Login",link:"/login"},
  ];
  let [open, setOpen] =useState(false);
  let [dropOpen,setDropOpen]=useState(true);

return (
    <div className='shadow-2xl z-50 w-full fixed top-0 left-0'>
       <div className='md:flex items-center justify-between bg-lime-300  md:px-10 px-6'>
       <img src={logo} alt={"logo"} className='pl-8 py-4 h-[5rem]'/>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
        </div>
        {/* linke items */}
       
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-lime-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-13': 'top-[-490px]'}`}>
             <NavLink to="/" className='md:ml-8 md:my-0 my-7 font-bold flex '>Home</NavLink>
             <NavLink to="/category" className='md:ml-8 md:my-0 my-7  flex '>category</NavLink>
             {
                !auth.user ?(<>
                 <NavLink to="/register" className='md:ml-8 md:my-0 my-7  flex '>registration</NavLink>
             <NavLink to="/login" className='md:ml-8 md:my-0 my-7  flex '>Login</NavLink>
                </>):(
                    <>
             <li className='md:ml-8 md:my-0 my-7  flex flex-col'>

  <button id="dropdownNavbarLink" onClick={()=>setDropOpen(!dropOpen)} data-dropdown-toggle="dropdownNavbar" className="text-gray-700  border-b md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between md:w-auto">{auth?.user?.name} <svg className="w-4 h-[2rem] ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
  {/* Dropdown menu */}
  <div id="dropdownNavbar"  className={`${dropOpen ? 'hidden': 'flex flex-col'} bg-white text-base  list-none divide-y divide-gray-100 rounded shadow-2xl my-6 w-40 absolute mt-[2.5rem]`}>
    <ul className="md:py-1"  aria-labelledby="dropdownLargeButton">
      <li>
       <NavLink onClick={()=>setDropOpen(!dropOpen)} to={`/dashboard/${auth?.user?.role==1?"admin":"user"}`} className='md:ml-8 md:my-0 my-7   flex justify-center md:justify-start '>DashBoard</NavLink>
      </li>
    </ul>
    <div onClick={()=>setDropOpen(!dropOpen)} className="py-1">
    <NavLink onClick={handelLogout} to="/login" className='md:ml-8 md:my-0 my-7  flex justify-center md:justify-start'>Logout</NavLink>
    </div>
  </div>

             </li>
             


                   
                    </>
                )
             }
             <NavLink to="/cart" className='md:ml-8 md:my-0 my-7  flex mr-2'><FaShoppingCart/><span >(0)</span></NavLink>
             <div className='w-full flex justify-start'>
             <SearchInput className="mr-4"/>
             </div>
           
        </ul>
        {/* button */}
       </div>
    </div>
);
};
export default Header;