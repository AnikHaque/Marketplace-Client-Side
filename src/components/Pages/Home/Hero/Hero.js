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
                <h1 className="sm:text-[2.5rem] lg:text-5xl mb-4 font-bold text-left">
                 Hire the best <br></br> freelancers for any job,<br></br> online.
                </h1>
               
                 <ul className='text-left banner-list'>
                  <li className='mb-1'>World's largest freelance marketplace</li>
                  <li className='mb-1'>Any job you can possibly think of</li>
                  <li className='mb-1'>Save up to 90% & get quotes for free</li>
                  <li>Pay only when you're 100% happy</li>
                 </ul>
             
                <div className="ml-[-80px]">
                  <button className="px-20 py-4 font-bold text-white bg-blue-500 rounded-sm  mr-4 text-sm mt-4">
                  Get Started
                  </button>
                  <button className="px-20 py-4 font-bold border border-solid border-gray rounded-sm  text-sm mt-4">
                  Discover
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;