import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSearch, faShoppingCart, faPaintBrush, faTools, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t('services.web_design.name'),
      description: t('services.web_design.description'),
      icon: faLaptopCode,
    },
    {
      name: t('services.seo.name'),
      description: t('services.seo.description'),
      icon: faSearch,
    },
    {
      name: t('services.ecommerce.name'),
      description: t('services.ecommerce.description'),
      icon: faShoppingCart,
    },
    {
      name: t('services.ux_ui.name'),
      description: t('services.ux_ui.description'),
      icon: faPaintBrush,
    },
    {
      name: t('services.maintenance.name'),
      description: t('services.maintenance.description'),
      icon: faTools,
    },
    {
      name: t('services.content.name'),
      description: t('services.content.description'),
      icon: faPenAlt,
    },
  ];

  return (
    <section className='flex items-center justify-center bg-gray-100'>
      <div className='flex flex-col text-black container mx-auto max-w-[1570px] mt-32 mb-32 px-8'>
        <div className='text-left md:w-1/2 scroll-in '>
          <h2 className='text-black font-extrabold font-poppins text-3xl md:text-5xl'>
            {t('services.header.title')}
          </h2>
          <div className='border-black border-b-8 w-36 h-8'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 scroll-in'>
          {services.map((service) => (
            <div key={service.name} className='bg-white p-8 shadow-lg'>
              <FontAwesomeIcon icon={service.icon} className='text-teal-700 text-3xl' />
              <h2 className='text-black font-bold font-poppins text-3xl md:text-4xl mt-8'>{service.name}</h2>
              <h3 className='text-teal-700 font-poppins text-xl md:text-2xl mt-4'>{service.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
