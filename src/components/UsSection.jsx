import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UsSection = () => {
  const { t } = useTranslation();

  return (
    <section className='flex items-center justify-center bg-zinc-900 h-[60vh] p-8 md:p-0'>
      <div className='scroll-in flex flex-col md:flex-row text-black container mx-auto px-4'>
        <div className='md:w-1/2'>
          <h1 className='text-teal-700 font-extrabold font-poppins text-3xl mb-8 md:mb-16'>{t('usSection.introductionTitle')}</h1>
          <p className='text-white font-poppins text-lg sm:text-xl md:text-6xl mb-6'>{t('usSection.introductionText')}</p>
          <button className='bg-none text-white text-xl md:text-2xl font-bold font-poppins mt-4 rounded-3xl mx-auto md:mx-0'>{t('usSection.learnMore')} →</button>
        </div>
        <div className="w-80 md:ml-0 h-1 md:w-1 md:h-auto bg-white mt-12"></div>
        <div className='md:w-1/2 md:mt-0 mt-12'>
          <h1 className='text-teal-700 font-extrabold font-poppins text-3xl mb-8 md:mb-16 md:ml-24'>{t('usSection.servicesTitle')}</h1>
          <p className='text-white font-poppins text-lg sm:text-xl md:text-6xl mb-6 md:ml-24'>{t('usSection.servicesText')}</p>
          <button className='bg-none text-white text-xl md:text-2xl font-bold font-poppins mt-4 rounded-3xl mx-auto md:mx-0 md:ml-24'>
            <Link to='/website'>{t('usSection.learnMore')} →</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UsSection;
