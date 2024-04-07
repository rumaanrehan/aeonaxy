import React from 'react'
import Paypal from '../assets/Paypal-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
const Footer = () => {
  return (
    <div>

<div className="bg-white mt-10">
  <div className="flex-col w-full mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <a href="/">
    <img className="h-16 w-auto md:h-24" src={Paypal} alt="Logo" />
        </a>
    <div className="flex justify-between border-b-2 border-gray-200 py-6 md:justify-between md:space-x-10">
      
      <nav className="flex space-x-6 md:space-x-8">
        <a href="/" className="text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Help</a>
        <a href="/" className="text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800"> Contact</a>
        <a href="/" className="text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Fees</a>
        <a href="/" className="text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Security</a>
        <a href="/" className="text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Apps</a>
        <a href="/" className="hidden md:block text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Shop</a>
        <a href="/" className="hidden md:block text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Enterprise</a>
        <a href="/" className="hidden md:block text-sm md:base leading-6 font-normal md:font-medium text-black hover:text-blue-800">Partners</a>
        
      </nav>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="/" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faFlag}/> 
        </a>
      </div>
    </div>
    

  <div className="flex flex-col lg:flex-row justify-between py-6 ">
    <div className="flex border-b-2 border-gray-200 pb-4 mb-5 flex-wrap md:flex-nowrap space-x-8 md:space-x-8 md:border-none">
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">About</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Newsroom</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Jobs</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Investor Relations</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Values in Action</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Public</a>
      <a href="/" className="text-sm mb-2 text-left text-black text-nowrap hover:text-blue-800">Sitemap</a>
    </div>
    <div className="flex space-x-8  lg:space-x-8">
        <span className="text-center text-sm text-nowrap text-gray-400">© 1999-2022</span>
        <a href="/" className="text-sm text-black text-nowrap hover:text-blue-800">Accessibility</a>
        <a href="/" className="text-sm text-black text-nowrap hover:text-blue-800">Privacy</a>
        <a href="/" className="text-sm text-black text-nowrap hover:text-blue-800">Cookies</a>
        <a href="/" className="text-sm text-black text-nowrap hover:text-blue-800">Legal</a>
    </div>
  </div>
</div>
    </div>
  </div>
  )
}

export default Footer