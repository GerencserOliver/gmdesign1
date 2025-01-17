import React from 'react';
import Laptop from '../images/laptop.jpg';
import Office from '../images/office.avif';
import Buildings from '../images/buildings.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

  const packages = [
    {
      image: Laptop,
      name: t('prices.packages.seo.name'),
      price: '49,000 HUF',
      description: t('prices.packages.seo.description'),
    },
    {
      image: Office,
      name: t('prices.packages.website.name'),
      price: '99,000 HUF',
      description: t('prices.packages.website.description'),
    },
    {
      image: Buildings,
      alt: 'UX Design',
      name: t('prices.packages.ux.name'),
      price: '149,000 HUF',
      description: t('prices.packages.ux.description'),
    },
  ];

  return (
    <section className='mt-20 flex items-center justify-center'>
      <div className='flex flex-col text-black container mx-auto max-w-[1570px] px-8'>
        <div className='text-left md:w-1/2 scroll-in '>
          <h2 className='text-black font-extrabold font-poppins text-3xl md:text-5xl'>
            {t('prices.header.title')}
          </h2>
          <h3 className='text-black font-bold font-poppins text-2xl md:text-3xl mt-8'>
            {t('prices.header.subtitle')}
          </h3>
          <div className='border-black border-b-8 w-36 h-8'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 scroll-in justify-between h-full'>
          {packages.map((pkg) => (
            <div key={pkg.name} className='bg-gray-100'>
              <img src={pkg.image} alt={pkg.name} className='w-full md:h-64' />
              <h2 className='text-black font-bold font-poppins text-3xl md:text-4xl pl-8 pt-8'>
                {pkg.name}
              </h2>
              <h3 className='text-teal-700 font-poppins text-xl md:text-xl mt-4 pl-8 pr-8'>
                {pkg.description}
              </h3>
              <div className='text-center mt-2'>
                <button className='hover:bg-gray-800 bg-orange-700 mx-auto text-white text-xl font-bold font-poppins p-4 mt-4 rounded-xl mb-8'>
                  <Link to='/website'>{t('prices.button_text')}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
