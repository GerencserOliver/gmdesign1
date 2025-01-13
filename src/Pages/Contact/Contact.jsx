import React from 'react'
import CTA from '../../components/CTA'
import ScrollAnimation from '../../components/ScrollAnimation'
import IntroAnimation from '../../components/IntroAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <IntroAnimation />
        <ScrollAnimation />
        <section className='flex items-center justify-center'>
          <div className='container mx-auto max-w-[1570px] flex flex-col md:flex-row px-4 md:px-10 z-1'>
            <div className='scroll-in w-full md:w-4/6 text-center md:text-left'>
              <h1 className='text-black font-bold font-poppins text-xl mb-6'>
                Website Design & Development | Performance-Driven | Győr
              </h1>
              <h1 className='text-black font-bold font-poppins text-3xl sm:text-5xl md:text-8xl mb-6'>
                Contact
              </h1>
            </div>
            <div className='md:w-2/6' >
              <button className='bg-orange-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl w-full font-bold font-poppins md:px-24 px-6 py-6 mt-4 rounded-full mb-16 md:mb-0'>
              <Link to='/contact'>Request a Quote</Link>
              </button>
            </div>
          </div>
          <div className="flex-col items-center space-y-4 text-black mt-10 hidden md:block fixed left-0 z-10">
            <div className="flex flex-col items-center space-y-4 text-white p-12 mt-72">
              {/* Email Link */}
              <a
                href="mailto:info@yourwebsite.com"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-white h-8" />
              </a>
    
              {/* Facebook Link */}
              <a
                href="https://facebook.com"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white h-8" />
              </a>
    
              {/* Instagram Link */}
              <a
                href="https://instagram.com"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white h-8" />
              </a>
            </div>
          </div>
        </section>
        <CTA />
    </div>
  )
}

export default Contact
