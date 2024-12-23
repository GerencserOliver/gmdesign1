import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react'

const links = [
  { name: "Services", href: "#"},
  { name: "About Us", href: "#"},
  { name: "Testimonials", href: "#"},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='top-0 z-50 px-10 w-full wrapper h-48'>
        <div className="flex items-center justify-between h-full text-black container mx-auto max-w-[1480px]">
            <img src={logo} alt="Logo" className='w-24' />

            {/* hamburger */}
            <div className='block md:hidden'>
              <button onClick={() => setIsOpen(!isOpen)}
                className='text-black focus:outline-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              </button>
            </div>

            {/* large */}
            <ul className='hidden md:flex items-center justify-end h-full ml-auto'>
                {links.map((link) => (
                  <li key={link.name} className='text-black font-semibold text-xl font-poppins ml-10'>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
                <button className='ml-10 bg-teal-700 p-3 pr-8 pl-8 rounded-md text-white font-poppins'>Contact</button>
            </ul>

            {/* mobile */}
            <ul className={`fixed inset-0 bg-white flex flex-col justify-center items-center space-y-6 text-black font-bold text-2xl transition-transform ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}style={{ zIndex: 60 }}>
              <button onClick={() => setIsOpen(!isOpen)} className='text-black absolute top-12 right-5 p-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {links.map((link) => (
                <li key={link.name} className='block py-4 text-xl font-poppins'>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <button className='bg-teal-700 p-3 pr-8 pl-8 rounded-md text-white font-poppins'>Contact</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
