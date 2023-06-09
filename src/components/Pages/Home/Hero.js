import React from "react";
import bannerPic from "../../Assets/BannerPic.png";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Hero = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div>
      <section>
        <div className="w-full relative bg-gray-50 pb-16 ">
          <div className="pt-2 lg:flex items-center justify-between relative z-10 container mx-auto">
          
          {/* TODO: Right side card */}
            <div role="contentinfo" className="w-full p-9 pt-5 text-black  bg-transparent rounded-lg lg:w-1/2 h-full">
              <p tabIndex="0" className=" text-5xl font-semibold  text-blue-600 uppercase">
                Let's find
              </p>
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "Education in innovation",
                  1000,
                  "Education in creation",
                  1000,
                ]}
                speed={60}
                className="py-5 mb-5 text-2xl sm:text-md md:text-2xl text-gray-700 font-semibold capitalize"
                // style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              <p tabIndex="0" className="text-gray-800 mx-5 font-regular mb-2 mt-2 ">
                Online tutors, trusted, vetted and instantly bookable to support maths, english, science and a host of
                other academic, vocational and pastoral tuition.
              </p>
              <Link to="/">
                <button
                  className="bg-gradient-to-r from-[#045DE9] to-[#09C6F9] mt-2 mr-4 px-3 py-3 md:px-8 md:py-[8px] text-white rounded p-1 items-center justify-center"
                >
                 Get Started
                </button>
              </Link>

            </div>
             



            {/* ---------pic--------- */}
            <div className="lg:w-1/2 lg:pr-10 xl:pr-0">
              <img className="mx-auto" src='https://marketplace.exertiowp.com/wp-content/uploads/2021/10/Group-441.png?fbclid=IwAR1ih8hf97_Ywvr5x2MzVLFGFenfKNwlFPoBhKoOhhL9ap3AfOw4d14rg5M' alt="img" />
            </div>
          </div>
        </div>
      </section>
      
    </div>

   
  );
};

export default Hero;
