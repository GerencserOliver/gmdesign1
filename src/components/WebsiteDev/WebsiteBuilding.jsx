import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faDraftingCompass,
  faLightbulb,
  faCode,
  faRocket,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const WebsiteBuilding = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('websiteBuilding.steps.0.title'),
      icon: faHandshake,
      description: t('websiteBuilding.steps.0.description'),
    },
    {
      title: t('websiteBuilding.steps.1.title'),
      icon: faDraftingCompass,
      description: t('websiteBuilding.steps.1.description'),
    },
    {
      title: t('websiteBuilding.steps.2.title'),
      icon: faLightbulb,
      description: t('websiteBuilding.steps.2.description'),
    },
    {
      title: t('websiteBuilding.steps.3.title'),
      icon: faCode,
      description: t('websiteBuilding.steps.3.description'),
    },
    {
      title: t('websiteBuilding.steps.4.title'),
      icon: faRocket,
      description: t('websiteBuilding.steps.4.description'),
    },
    {
      title: t('websiteBuilding.steps.5.title'),
      icon: faLifeRing,
      description: t('websiteBuilding.steps.5.description'),
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="scroll-in container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-12 mt-12 mb-12">
        <h2 className="text-black font-extrabold font-poppins text-3xl md:text-6xl max-w-screen-lg">
          {t('websiteBuilding.title')}
        </h2>
        <h3 className="text-black font-bold font-poppins text-2xl md:text-3xl mt-8 max-w-screen-lg md:mt-16">
          {t('websiteBuilding.description')}
        </h3>
        <div className="border-black border-b-8 w-36 h-8 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-100 p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="text-teal-600 mb-4"
              />
              <h3 className="text-black font-bold font-poppins text-2xl md:text-3xl mt-4">
                {step.title}
              </h3>
              <p className="text-teal-700 font-poppins text-xl md:text-2xl mt-4">
                {step.description}
              </p>
              <hr className="block md:hidden border-gray-300 mt-6 mb-3 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilding;
