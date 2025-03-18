import React from 'react'
import logo from '../assets/brand_logo.png'

const Navbar = () => {
  return (
    <div>
       <div>
        <nav className='flex justify-between bg-white h-[72px] w-[1440px] items-center px-20 border-b-1 border-gray-100/50  shadow-md'>
          <div>
            <img src={logo} alt="brand-logo" />
          </div>

          <ul className='flex gap-2 text-md font-bold font-(poppins)'>
            <li href="#menu">MENU</li>
            <li href="#location">LOCATION</li>
            <li href="#about">ABOUT</li>
            <li href="#contact">CONTACT</li>
          </ul>

          <button
          className='text-md font-semibold cursor-pointer  text-white bg-red-700 px-2 items-center py-1 font-(poppins) hover:bg-red-950'
          >Login</button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
