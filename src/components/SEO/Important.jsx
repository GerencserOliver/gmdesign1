import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Important = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="flex items-center justify-center md:h-[140vh] bg-gray-100">
      <div className="scroll-in container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-0 mt-12">
        <div className="max-w-[800px]">
          <h1 className="text-black font-extrabold font-poppins text-3xl md:text-6xl">
            {t('important.heading1')}
          </h1>
          <h3 className="text-black font-bold font-poppins text-2xl md:text-3xl mt-8">
            {t('important.subheading1')}
          </h3>
          <div className="border-black border-b-8 w-36 h-8"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 scroll-in">
          <div className="bg-teal-700 p-8 shadow-2xl">
            <h2 className="text-white font-bold font-poppins text-3xl md:text-4xl">
              {t('important.box1.title')}
            </h2>
            <h3 className="text-white font-poppins text-xl md:text-2xl mt-4">
              {t('important.box1.content')}
            </h3>
          </div>
          <div className="bg-white p-8 shadow-2xl">
            <h2 className="text-black font-bold font-poppins text-3xl md:text-4xl">
              {t('important.box2.title')}
            </h2>
            <h3 className="text-teal-700 font-poppins text-xl md:text-2xl mt-4">
              {t('important.box2.content')}
            </h3>
          </div>
        </div>
        <div className="max-w-[800px] mt-16">
          <h1 className="text-black font-extrabold font-poppins text-3xl md:text-6xl">
            {t('important.heading2')}
          </h1>
          <p className="text-black font-poppins text-lg md:text-2xl mt-8">
            {t('important.paragraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Important;
