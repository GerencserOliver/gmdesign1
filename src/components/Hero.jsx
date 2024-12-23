import React from 'react';
import heroImg from '../images/heroImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className='flex items-center justify-center'>
      <div className='container mx-auto max-w-[1400px] flex flex-col md:flex-row px-4 md:px-10'>
        <div className='w-full md:w-4/6 text-center md:text-left'>
          <h1 className='text-black font-bold font-poppins text-xl mb-6'>
            Website Design & Development | Performance-Driven | Győr
          </h1>
          <h1 className='text-black font-bold font-poppins text-3xl sm:text-5xl md:text-8xl mb-6'>
            Your Online Presence Starts and Thrives Here
          </h1>
          <p className='text-teal-700 font-poppins text-lg sm:text-xl md:text-3xl mb-6'>
            Custom websites that captivate, perform, and grow your business. From design to deployment, we bring your ideas to life.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className='bg-teal-700 px-8 py-4 rounded-2xl text-white font-poppins mt-6'>
              Get Started
            </button>
          </div>
        </div>
        <div className='md:w-2/6 text-right hidden md:block'>
          <img src={heroImg} alt='Hero' className='max-w-xl' />
        </div>
      </div>
      <div className="flex-col items-center space-y-4 text-black mt-10 hidden md:block">
        <div className="flex flex-col items-center space-y-4 text-white p-12">
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
  );
};

export default Hero;
