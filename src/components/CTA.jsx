import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ctaImg from '../images/ctaImg.avif';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const { t } = useTranslation(); // useTranslation hook

  // Input változók kezelése
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Az űrlap beküldése
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('cta.sending')); // Lokalizált státusz

    try {
      // Fetch kérés küldése a backendnek
      const response = await fetch('/api/send-email', { // Ez automatikusan az aktuális domain-t használja
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t('cta.successMessage')); // Lokalizált sikerüzenet
      } else {
        setStatus(t('cta.failureMessage')); // Lokalizált hibaüzenet
      }
    } catch (error) {
      setStatus(t('cta.errorMessage') + error.message); // Lokalizált hiba
    }
  };

  return (
    <section className='flex items-center justify-center bg-white md:h-[80vh] p-4'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center md:container mx-auto'>
        <form onSubmit={handleSubmit} className='w-full md:w-6/12 p-4 md:pr-12'>
          <h1 className='text-black font-extrabold font-poppins text-3xl md:text-5xl mb-6 text-center md:text-left'>
            {t('cta.title')}
          </h1>
          <div className='border-black border-b-4 w-24 md:w-36 h-2 md:h-4 mb-6 mx-auto md:mx-0'></div>
          <div className='space-y-4'>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='rounded-3xl block w-full border-b font-poppins b-gray-200 text-base md:text-xl text-black py-2 md:py-3 px-4 leading-tight focus:outline-none focus:placeholder:text-black'
              type='text'
              placeholder={t('cta.namePlaceholder')}
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='rounded-3xl block w-full border-b font-poppins b-gray-200 text-base md:text-xl text-black py-2 md:py-3 px-4 leading-tight focus:outline-none focus:placeholder:text-black'
              type='email'
              placeholder={t('cta.emailPlaceholder')}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='rounded-3xl h-32 md:h-48 block w-full border-b font-poppins b-gray-200 text-base md:text-xl text-black py-2 md:py-3 px-4 leading-tight focus:outline-none focus:placeholder:text-black'
              placeholder={t('cta.messagePlaceholder')}
            />
          </div>
          <button
            type="submit"
            className='mt-6 bg-orange-700 hover:bg-gray-800 text-white font-bold font-poppins py-2 md:py-4 px-6 md:px-8 rounded-3xl w-full'
          >
            {t('cta.submitButton')}
          </button>
          {status && (
            <p className='text-teal-700 font-poppins text-sm md:text-lg mt-6 text-center md:text-left'>
              {status}
            </p>
          )}
        </form>
        <div className='w-full md:w-6/12 p-4'>
          <img src={ctaImg} alt='CTA' className='w-full h-auto object-contain mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default CTA;
