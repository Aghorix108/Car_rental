import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Hero from '../../assets/Hero.svg';
import About from '../../assets/About.svg';
import { FaCar, FaIdBadge, FaHandHoldingUsd } from 'react-icons/fa';

export function Home(props) {
    const [text] = useTypewriter({
        words: ['6 Hours', '12 Hours', '24 Hours'],
        loop: true,
    });

    return (
        <div className="main-container w-full h-full bg-gradient-to-r from-blue-50 to-white">
            <div className="h-full w-full flex flex-col-reverse lg:flex-row lg:h-screen items-center py-4">
                <div className="hero-right flex flex-col items-center lg:justify-center lg:items-start text-center lg:text-left h-full lg:w-1/2 px-4 md:px-6 lg:px-10 space-y-2 md:space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-[#1d1f21]">
                        <span className="block custom-font">DRIVE YOUR WAY</span>
                        <span className="block custom-font">THROUGH JAIPUR</span>
                    </h1>
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#1d1f21] mt-1 md:mt-2">
                        Rent a Self-Drive Car for{' '}
                        <span className="text-orange-500 font-extrabold">
                            {text}
                            <Cursor cursorColor="orange" />
                        </span>
                        {' '}and Beyond!
                    </h2>
                    <p className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-md mt-1 md:mt-2">
                        Experience the freedom of self-driving with our wide range of cars available for your convenience. Choose your duration, pick your ride, and enjoy your journey in Jaipur!
                    </p>
                    <button className="mt-3 md:mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300">
                        Book Now
                    </button>
                </div>
                <div className="hero-left relative flex justify-center lg:justify-end items-center h-auto lg:w-1/2 px-4 md:px-6 lg:px-10">
                    <img className="relative z-10 w-full md:w-2/3 lg:w-full mb-0" src={Hero} alt="Hero" />
                </div>
            </div>

            <div className="easy-rental-process w-full py-8 bg-gradient-to-r from-orange-100 to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1d1f21]">How It Works</h2>
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <div className="step w-full lg:w-1/3 flex flex-col items-center mb-6 lg:mb-0">
                            <div className="icon bg-orange-500 text-white rounded-full p-4 mb-4">
                                <FaCar className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Choose a Car</h3>
                            <p className="text-center text-gray-700">Browse our wide selection of well-maintained and hygienic vehicles to find the perfect car for your needs.</p>
                        </div>
                        <div className="step w-full lg:w-1/3 flex flex-col items-center mb-6 lg:mb-0">
                            <div className="icon bg-orange-500 text-white rounded-full p-4 mb-4">
                                <FaIdBadge className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Verify Yourself</h3>
                            <p className="text-center text-gray-700">Provide the necessary documentation and verify your identity quickly and easily.</p>
                        </div>
                        <div className="step w-full lg:w-1/3 flex flex-col items-center">
                            <div className="icon bg-orange-500 text-white rounded-full p-4 mb-4">
                                <FaHandHoldingUsd className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Get Your Car</h3>
                            <p className="text-center text-gray-700">Once verified, pick up your car and start your journey with a hassle-free experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="About-us h-auto w-full flex flex-col lg:flex-row lg:px-10 py-4">
                <div className="About-right w-full lg:w-1/2 h-auto flex justify-center items-center">
                    <img className='w-full h-auto object-cover' src={About} alt="About Us" />
                </div>
                <div className="About-left w-full lg:w-1/2 flex flex-col gap-4 p-4 lg:p-6">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-[#1d1f21]'>About Us</h1>
                    <p className='text-base md:text-lg lg:text-xl font-medium text-gray-700'>
                        Welcome to Crazy Cars, Jaipur's top choice for self-drive car rentals! We specialize in offering the best value for your money, providing high-quality, well-maintained, and hygienic vehicles at unbeatable prices. While our competitors may charge a premium for similar vehicles, we’re committed to delivering the same exceptional cars at a fraction of the cost. Our goal is to make self-driving in Jaipur affordable and accessible for everyone. Choose Crazy Cars for a budget-friendly, reliable, and enjoyable driving experience!
                    </p>
                </div>
            </div>
        </div>
    );
}
