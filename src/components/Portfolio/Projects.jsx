import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio1 from '../../images/Portfolio/Responsive web design project for Oliver – modern UIUX and mobile-friendly layout.webp'
import Portfolio2 from '../../images/Portfolio/Mobile app development showcase  with intuitive user interface and real-time features.webp'
import Portfolio3 from '../../images/Portfolio/Brand identity design portfolio – logo, typography, and marketing materials for Oliver.webp'
import Portfolio4 from '../../images/Portfolio/Clean code example from my portfolio – React, tailwindcss development with best practices.webp'

import CarRental1 from '../../images/carRental/Premium car rental fleet – luxury sedans, SUVs, and economy cars available 247.webp'

import Gym1 from '../../images/gym/Professional weightlifting area – barbells, dumbbells, and power racks.webp'
import Gym2 from '../../images/gym/High-intensity group training session – HIIT workout with certified trainers.webp'
import Gym3 from '../../images/gym/Map - Conveniently located in Győr.webp'
import Gym4 from '../../images/gym/One-on-one personal training – customized fitness plans and nutrition advice.webp'
import Gym5 from '../../images/gym/Relaxation area with sauna, steam room, and massage services – post-workout recovery.webp'
import Gym6 from '../../images/gym/Cardio zone with treadmills, rowing machines, and ellipticals – burn calories efficiently.webp'
import Gym7 from '../../images/gym/Sports nutrition shop – protein powders, vitamins, and health supplements.webp'
import { useTranslation } from 'react-i18next' 

const Projects = () => {
    const { t } = useTranslation();

  return (
    <section className='flex items-center justify-center bg-white mt-12'>
        <div className='container mx-auto max-w-[1570px] flex flex-col px-4 md:px-10 md:mt-0 mt-12'>
            <div className='max-w-[800px] scroll-in'>
                <h2 className='text-black font-extrabold font-poppins text-3xl md:text-6xl'>{t('projects.title')}</h2>
                <div className='border-black border-b-8 w-36 h-8'></div>
            </div>
            <div className='flex items-center justify-center mt-16 md:mt-32 shadow-2xl scroll-in'>
                <img src={Portfolio1} alt="
                    My personal digital portfolio showcasing web design and UI/UX projects
                " className='w-full h-full object-cover' />
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-40 md:mt-96 mt-24 scroll-in scroll-in'>
                <img src={Portfolio2} alt="
                    UI/UX case study: An app for a portfolio showcasing web design and UI/UX projects
                " className='w-full object-cover shadow-2xl' />
                <img src={Portfolio3} alt="
                    Screenshot of my portfolio homepage – Oliver's digital portfolio
                " className='w-full object-cover shadow-2xl' />
                <img src={Portfolio4} alt="
                    Creative web design portfolio with case studies
                " className='w-full object-cover shadow-2xl' />
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
                <img src={CarRental1} alt="
                    Car rental website design with a modern and clean user interface for a car rental company
                " className='w-full h-full object-cover' />
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
                <img src={Gym1} alt="
                    Gym website design with a modern and clean user interface for a gym and fitness center
                " className='w-full object-cover shadow-2xl' />
                <img src={Gym3} alt="
                    Modern gym in Győr with state-of-the-art fitness equipment and friendly atmosphere
                " className='w-full object-cover shadow-2xl' />
                <img src={Gym2} alt="
                    Weightlifting area in Győr: barbells, dumbbells, and power racks for strength training
                " className='w-full object-cover shadow-2xl' />
                <img src={Gym4} alt="
                    Cardio zone with treadmills, ellipticals, and rowing machines – burn calories in Győr's best gym
                " className='w-full object-cover shadow-2xl' />
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-40 md:mt-96 mt-24 scroll-in scroll-in'>
                <img src={Gym5} alt="
                    High-energy spinning class in Győr – group workouts for maximum motivation
                " className='w-full object-cover shadow-2xl' />
                <img src={Gym6} alt="
                    Group fitness classes in Győr – yoga, pilates, and HIIT for all fitness levels
                " className='w-full object-cover shadow-2xl' />
                <img src={Gym7} alt="
                    Personal training sessions in Győr – one-on-one coaching for your fitness goals
                " className='w-full object-cover shadow-2xl' />
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
