import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import paypal from '../assets/paypal-icon-logo-svgrepo-com.svg'
const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu=()=>{
        let list = document.querySelector("ul");
        if(menu===true){
            list.classList.add('top-[-400px]');
            setMenu(false);
        }else{
            setMenu(true);
            list.classList.remove('top-[-400px]');
            list.classList.add('top-[50]');
            list.classList.remove('opacity-50');
            list.classList.add('opacity-100');
        }

    } 
  return (
    <div>
        <nav className='p-5 bg-white shadow  md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-[Poppins] cursor-pointer'>
                <img className='w-10' src={paypal} alt="" />
            </span>
            <span className='text-3xl cursor-pointer mx-2 block md:hidden' onClick={handleMenu} >
            <FontAwesomeIcon icon={!menu && faBars}/>
            <FontAwesomeIcon icon={menu && faXmark}/>
            </span>
        </div>
        <ul className=' md:flex md:items-center space-x-4 space-y-6 md:space-y-0 z-0  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto py-4 md:py-0 pl-7 md:pl-0 opacity-50 md:opacity-100 top-[-400px] transition-all ease-in duration-300'>
            <li className='mx-4 my-6 md:my-0'>
                <a className="text-xl hover:text-blue-800 duration-300" href="/">Personal</a>
            </li>
            <li className=''>
                <a className="text-xl hover:text-blue-800 duration-300" href="/">Bussines</a>
            </li>
            <li className=''>
                <a className="text-xl hover:text-blue-800 duration-300" href="/">Developer</a>
            </li>
            <li className=''>
                <a className="text-xl hover:text-blue-800 duration-300" href="/">Help</a>
            </li>
            <button className="bg-white text-blue-800 border border-blue-800 rounded-3xl duration-300 px-6 py-2 mx-4">Log In </button>
            <button className="bg-blue-800 text-white border border-blue-800 rounded-3xl duration-300 px-6 py-2 mx-4">Sign Up </button>
        </ul>
        </nav>
        <div className="h-[1px] w-full bg-slate-400"></div>
    </div>
  )
}

export default Navbar