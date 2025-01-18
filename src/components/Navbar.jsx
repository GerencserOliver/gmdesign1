import { Link } from 'react-router-dom'; // React Router Link import
import logo from '../images/logo.png'
import { useState } from 'react'

const links = [
  { name: "Website Development", href: "/website"},
  { name: "SEO", href: "/seo"},
  { name: "Portfolio", href: "/portfolio"},
  { name: "Contact", href: "/contact"},
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='md:scroll-in top-0 z-50 px-10 w-full wrapper h-48'>
        <div className="flex items-center justify-between h-full text-black container mx-auto max-w-[1480px]">
            <button>
              <Link to='/'>
                <img src={logo} alt="GMDesignLogo" className='w-24' />
              </Link>
            </button>

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
                  <li key={link.name} className='text-black font-semibold text-xl font-poppins li p-2 pr-4 pl-4'>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
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
              <li className='block py-4 text-xl font-poppins'>
                  <a href='/' >Home</a>
              </li>
              {links.map((link) => (
                <li key={link.name} className='block py-4 text-xl font-poppins'>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
