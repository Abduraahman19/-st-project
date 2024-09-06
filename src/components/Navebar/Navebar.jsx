import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src='src/assets/background-3.png' className='h-screen w-full object-cover' alt="Background" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-8 text-white">
        {/* Left side (Logo) */}
        <h1 className='text-base font-bold'>Material Tailwind React</h1>

        {/* Center (Navigation Links) */}
        <ul className='md:flex hidden font-bold text-sm space-x-4'>
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Profile</a></li>
          <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
          <li><a href="#" className="hover:text-gray-300">Sign Up</a></li>
          <li><a href="#" className="hover:text-gray-300">Docs</a></li>
        </ul>

        {/* Right side (Buttons) */}
        <div className="md:flex hidden space-x-2">
          <a href="#" className="h-9 w-24 text-center content-center items-center text-xs font-bold bg-transparent border-white text-white rounded-lg hover:bg-customGray hover:bg-opacity-50">PRO VERSION</a>
          <a href="#" className="bg-customGray h-9 w-32 text-center content-center items-center text-xs font-bold text-white rounded-lg">FREE DOWNLOAD</a>
        </div>
        <button className='md:hidden'><VscThreeBars /></button>
      </nav>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
  {/* Heading */}
  <h1 className="text-white text-[47px] font-bold px-4 py-4">Your story starts with us.</h1>
  
  {/* Paragraph */}
  <p className="text-white text-[22px] font-light mt-2 max-w-[780px] px-4">
    This is a simple example of a Landing Page you can build using Material Tailwind. It features multiple components based on the Tailwind CSS and Material Design by Google.
  </p>
</div>
  
    </div>
  )
}

export default Navbar
