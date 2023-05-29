import React from 'react'
import videoBg from '../../../Assets/hero.mp4'
import './Hero.css'

const Hero = () => {
  return (
    <div className='main'>
        <div className="overlay opacity-40"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content text-gray-100  pt-56 lg:pt-56 lg:pl-16">
            <div className=''>
                <p className="font-bold text-xs text-Teal mb-4">
                  {" "}
                    your e-learning partner
                </p>
                <h1 className="sm:text-[2.5rem] text-[1rem] font-bold">
                  This is <br /> the new way <br /> to learn online
                </h1>
                <p className="text-sm leading-7 text-gray max-w-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  officia sit vitae quo, eum similique?
                </p>
                <div className="mt-6">
                  <button className="px-6 py-3 font-bold text-white bg-blue-500 rounded-lg mr-4 text-sm">
                  Get Started
                  </button>
                  <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
                  Discover
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;