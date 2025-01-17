import React from 'react';
import { useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

  const packages = ['basic', 'pro', 'premium'];

  return (
    <section className="flex items-center justify-center md:h-[150vh] bg-white mt-12">
      <div className="scroll-in container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-0 mt-12">
        <div className="max-w-[800px]">
          <h2 className="text-black font-extrabold font-poppins text-3xl md:text-6xl">
            {t('wdprices.title')}
          </h2>
          <h3 className="text-black font-bold font-poppins text-2xl md:text-3xl mt-8">
            {t('wdprices.description')}
          </h3>
          <div className="border-black border-b-8 w-36 h-8"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 scroll-in">
          {packages.map((packageType) => (
            <div
              key={packageType}
              className={`p-8 flex flex-col justify-between h-full shadow-2xl ${
                packageType === 'basic'
                  ? 'bg-teal-700'
                  : packageType === 'pro'
                  ? 'bg-gray-100'
                  : 'bg-gray-900'
              }`}
            >
              <h2
                className={`${
                  packageType === 'basic' || packageType === 'premium'
                    ? 'text-white'
                    : 'text-black'
                } font-bold font-poppins text-3xl md:text-4xl`}
              >
                {t(`wdprices.${packageType}.title`)}
              </h2>
              <hr className="block border-gray-300 mt-3 mb-3" />
              <div className="flex justify-between items-center">
                <p
                  className={`font-poppins text-lg md:text-xl md:text-left ${
                    packageType === 'basic' || packageType === 'premium'
                      ? 'text-white'
                      : 'text-black'
                  }`}
                >
                  {t('wdprices.startingFrom')}
                </p>
                <h1
                  className={`font-extrabold font-poppins text-3xl md:text-4xl ${
                    packageType === 'basic' || packageType === 'premium'
                      ? 'text-white'
                      : 'text-black'
                  }`}
                >
                  {t(`wdprices.${packageType}.price`)}
                </h1>
              </div>
              <hr className="block border-gray-300 mt-3 mb-3" />
              <p
                className={`font-poppins font-bold text-xl md:text-2xl mb-6 md:text-left ${
                  packageType === 'basic' || packageType === 'premium'
                    ? 'text-white'
                    : 'text-black'
                }`}
              >
                {t(`wdprices.${packageType}.description`)}
              </p>
              <hr className="block border-gray-300 mt-3 mb-3" />
              <ul className="list-inside list-disc">
                {Array.isArray(t(`wdprices.${packageType}.features`, { returnObjects: true })) &&
                  t(`wdprices.${packageType}.features`, { returnObjects: true }).map(
                    (feature, index) => (
                      <li
                        key={index}
                        className={`font-poppins text-lg md:text-xl mt-3 ${
                          packageType === 'basic' || packageType === 'premium'
                            ? 'text-white'
                            : 'text-black'
                        }`}
                      >
                        {feature}
                      </li>
                    )
                  )}
              </ul>
              <button
                className="bg-orange-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl font-bold font-poppins px-6 py-3 mt-4 rounded-3xl w-full sm:w-auto mb-16 md:mb-0"
              >
                {t('wdprices.requestQuote')}
              </button>
            </div>
          ))}
        </div>
        <p className="text-teal-700 font-poppins text-sm md:text-lg mb-6 mt-12 md:text-left">
          {t('wdprices.note')}
        </p>
      </div>
    </section>
  );
};

export default Prices;