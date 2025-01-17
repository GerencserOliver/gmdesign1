import React from 'react';
import heroImg from '../images/heroImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Nature from '../images/nature.jpg';
import WhiteLogo from '../images/whiteLogo.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className=''>
      <div className='container mx-auto max-w-[1570px] flex flex-col md:flex-row px-4 md:px-10'>
        <div className='scroll-in w-full md:w-4/6 text-center md:text-left'>
          <h1 className='text-black font-bold font-poppins text-xl mb-6'>
            {t('hero.subtitle')}
          </h1>
          <h1 className='text-black font-bold font-poppins text-3xl sm:text-5xl md:text-8xl mb-6'>
            {t('hero.title')}
          </h1>
          <p className='text-teal-700 font-poppins text-lg sm:text-xl md:text-3xl mb-6'>
            {t('hero.description')}
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className='bg-orange-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl font-bold font-poppins px-6 py-3 mt-4 rounded-3xl w-full sm:w-auto mb-16 md:mb-0'>
              <Link to='/contact'>{t('hero.button_text')}</Link>
            </button>
          </div>
        </div>
        <div className='md:w-2/6 text-right hidden md:block'>
          <img src={heroImg} alt='HeroImage' className='max-w-xl' />
        </div>
      </div>
      <div className="items-center space-y-4 text-black mt-10 md:mt-32 right-0 z-10">
        <img src={WhiteLogo} alt="GMDesignLogo" className='absolute left-1/2 -translate-x-1/2 md:mt-96 mt-20 md:w-48 w-24' />
        <img src={Nature} alt="NatureImage" className='w-full object-cover md:h-[110vh]' />
      </div>

      <div className="flex-col items-center space-y-4 text-black mt-10 hidden md:block fixed left-0 z-10 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center space-y-4 text-white p-12">
          {/* Email Link */}
          <a
            href="mailto:gmwebsitedesign@gmail.com"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white h-8" />
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/oliver.gerencser.5/"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-white h-8" />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/oliveerphd/"
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
