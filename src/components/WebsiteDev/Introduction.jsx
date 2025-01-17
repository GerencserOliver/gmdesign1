import React from 'react';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center md:h-[100vh] bg-gray-100">
      <div className="scroll-in container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-0 mt-12">
        <div className="max-w-[800px]">
          <h2 className="text-black font-extrabold font-poppins text-3xl md:text-6xl">
            {t('introduction.title')}
          </h2>
          <h3 className="text-black font-bold font-poppins text-2xl md:text-3xl mt-8">
            {t('introduction.subtitle')}
          </h3>
          <div className="border-black border-b-8 w-36 h-8"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 scroll-in">
          {t('introduction.sections', { returnObjects: true }).map((section, index) => (
            <div
              key={index}
              className={`p-8 shadow-2xl ${
                index % 2 === 0 ? 'bg-teal-700 text-white' : 'bg-white text-black'
              }`}
            >
              <h2 className={`font-bold font-poppins text-3xl md:text-4xl ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
                {section.title}
              </h2>
              <h3 className={`font-poppins text-xl md:text-2xl mt-4 ${index % 2 === 0 ? 'text-white' : 'text-teal-700'}`}>
                {section.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
