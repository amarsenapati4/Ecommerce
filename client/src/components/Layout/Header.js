import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from './REXdex copy.png'
import { FaShoppingCart} from "react-icons/fa";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../Context/auth';
import toast from "react-hot-toast";


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

return (
    <div className='shadow-2xl w-full fixed top-0 left-0'>
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
                     <NavLink onClick={handelLogout} to="/login" className='md:ml-8 md:my-0 my-7  flex '>Logout</NavLink>
                    </>
                )
             }
             <NavLink to="/cart" className='md:ml-8 md:my-0 my-7  flex '><FaShoppingCart/><span >(0)</span></NavLink>
        </ul>
        {/* button */}
       </div>
    </div>
);
};
export default Header;