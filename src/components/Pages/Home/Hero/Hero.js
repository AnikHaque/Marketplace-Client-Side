import React from "react";
import hero from "../../../Assets/Images/hero.png";

import { motion } from "framer-motion";
const Hero = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section mt-[-30px]" id="home">
      <div className="md:flex items-center justify-center">
        <div className="">
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
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
        <div className="md:w-[50%]">
          <img src='https://marketplace.exertiowp.com/wp-content/uploads/2021/10/Group-441.png?fbclid=IwAR1ih8hf97_Ywvr5x2MzVLFGFenfKNwlFPoBhKoOhhL9ap3AfOw4d14rg5M' className="ml-52 w-[80%] mt-20" alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {/* {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
