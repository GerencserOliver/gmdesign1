import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SEOQuestions = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: t('seoQuestions.questions.1.question'),
      answer: t('seoQuestions.questions.1.answer'),
    },
    {
      question: t('seoQuestions.questions.2.question'),
      answer: t('seoQuestions.questions.2.answer'),
    },
    {
      question: t('seoQuestions.questions.3.question'),
      answer: t('seoQuestions.questions.3.answer'),
    },
    {
      question: t('seoQuestions.questions.4.question'),
      answer: t('seoQuestions.questions.4.answer'),
    },
  ];

  return (
    <section className="flex items-center justify-center bg-gray-100 py-12 mt-12 mb-12">
      <div className="scroll-in container mx-auto max-w-[900px] px-4">
        <h1 className="text-black font-extrabold font-poppins text-3xl md:text-4xl mb-6 text-center">
          {t('seoQuestions.heading')}
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-medium text-black"
              >
                <span>{item.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 text-teal-700 text-base md:text-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOQuestions;
