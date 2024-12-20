import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react'

const links = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#"},
  { name: "About Us", href: "#"},
  { name: "Contact", href: "#"},
  { name: "Testimonials", href: "#"},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed top-0 z-50 px-10 w-full wrapper h-28 border-b-[0.2px] border-gray-900'>
        <div className="flex items-center justify-between h-full text-black container mx-auto max-w-[1400px]">
            <img src={logo} alt="Logo" className='w-16' />

            {/* hamburger */}
            <div className='block md:hidden'>
              <button onClick={() => setIsOpen(!isOpen)}
                className='text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              </button>
            </div>

            {/* large */}
            <ul className='hidden md:flex items-center justify-end h-full ml-auto'>
                {links.map((link) => (
                  <li key={link.name} className='text-white font-poppins ml-10'>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
            </ul>

            {/* mobile */}
            <ul className={`lg:hidden absolute top-28 left-0 w-full text-white text-center transition-all ease-in-out duration-500 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
              {links.map((link) => (
                <li key={link.name} className='block py-4 border-b border-gray-900'>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
