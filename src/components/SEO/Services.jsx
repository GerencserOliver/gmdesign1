import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartLine, faFileCode, faUserShield, faSitemap, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const { t } = useTranslation(); // Initialize translation function

  const services = [
    {
      key: 'seoStrategy',
      icon: faSearch,
    },
    {
      key: 'keywordResearch',
      icon: faChartLine,
    },
    {
      key: 'onPageOptimization',
      icon: faFileCode,
    },
    {
      key: 'technicalSeo',
      icon: faUserShield,
    },
    {
      key: 'linkBuilding',
      icon: faSitemap,
    },
    {
      key: 'contentMarketing',
      icon: faPenFancy,
    },
  ];

  return (
    <section className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col text-black container mx-auto max-w-[1570px] mt-32 mb-32 px-8">
        <div className="text-left md:w-1/2 scroll-in">
          <h2 className="text-black font-extrabold font-poppins text-3xl md:text-5xl">
            {t('SEOservices.heading')}
          </h2>
          <div className="border-black border-b-8 w-36 h-8"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 scroll-in">
          {services.map((service) => (
            <div key={service.key} className="bg-white p-8 shadow-lg">
              <FontAwesomeIcon icon={service.icon} className="text-teal-700 text-3xl" />
              <h2 className="text-black font-bold font-poppins text-3xl md:text-4xl mt-8">
                {t(`SEOservices.${service.key}.name`)}
              </h2>
              <h3 className="text-teal-700 font-poppins text-xl md:text-2xl mt-4">
                {t(`SEOservices.${service.key}.description`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
