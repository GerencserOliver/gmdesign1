import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio1 from '../../images/Portfolio/portfolio1.png'
import Portfolio2 from '../../images/Portfolio/portfolio2.jpg'
import Portfolio3 from '../../images/Portfolio/portfolio3.jpg'
import Portfolio4 from '../../images/Portfolio/portfolio4.jpg'

import CarRental1 from '../../images/carRental/carrental1.png'

import Gym1 from '../../images/gym/gym1.png'
import Gym2 from '../../images/gym/gym2.jpg'
import Gym3 from '../../images/gym/gym3.png'
import Gym4 from '../../images/gym/gym4.png'
import Gym5 from '../../images/gym/gym5.jpg'
import Gym6 from '../../images/gym/gym6.jpg'
import Gym7 from '../../images/gym/gym7.jpg'
import { useTranslation } from 'react-i18next' 

const Projects = () => {
    const { t } = useTranslation();

  return (
    <section className='flex items-center justify-center bg-white mt-12'>
        <div className='container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-0 mt-12'>
            <div className='max-w-[800px] scroll-in'>
                <h1 className='text-black font-extrabold font-poppins text-3xl md:text-6xl'>{t('projects.title')}</h1>
                <div className='border-black border-b-8 w-36 h-8'></div>
            </div>
            <div className='flex items-center justify-center mt-16 md:mt-32 shadow-2xl scroll-in'>
                <img src={Portfolio1} alt="portfolio1" className='w-full h-full object-cover' />
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-40 md:mt-96 mt-24 scroll-in scroll-in'>
                <img src={Portfolio2} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Portfolio3} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Portfolio4} alt="portfolio1" className='w-full object-cover shadow-2xl' />
            </div>
            <div className="mt-32 w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-16 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center mb-8">
                    {t('projects.description1')}
                </h2>
                <Link to="https://oliver-dev.vercel.app/" target="_blank">
                    <button className="bg-orange-700 hover:bg-orange-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-8">
                        {t('projects.viewProject')}
                    </button>
                </Link>
            </div>
            <div className='flex items-center justify-center mt-16 md:mt-32 shadow-2xl scroll-in'>
                <img src={CarRental1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="mt-32 w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 p-16 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center">
                    {t('projects.description2')}
                </h2>
                {/* <Link to="https://car-rental-website-omega.vercel.app/" target="_blank">
                    <button className="bg-orange-700 hover:bg-orange-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-8">
                        View Project
                    </button>
                </Link> */}
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-40 md:mt-32 mt-24 scroll-in scroll-in'>
                <img src={Gym1} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Gym3} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Gym2} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Gym4} alt="portfolio1" className='w-full object-cover shadow-2xl' />
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-40 md:mt-96 mt-24 scroll-in scroll-in'>
                <img src={Gym5} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Gym6} alt="portfolio1" className='w-full object-cover shadow-2xl' />
                <img src={Gym7} alt="portfolio1" className='w-full object-cover shadow-2xl' />
            </div>
            <div className="mt-32 md:mb-16 w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-16 rounded-lg shadow-lg transform hover:scale-105 transition-all">
                <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center mb-8">
                    {t('projects.description3')}
                </h2>
                <Link to="https://gym-website-gamma-five.vercel.app/" target="_blank">
                    <button className="bg-orange-700 hover:bg-orange-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-8">
                        {t('projects.viewProject')}
                    </button>
                </Link>
            </div>
        </div>
    </section>
    // grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 scroll-in
  )
}

export default Projects
