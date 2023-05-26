import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Catagories/science.png";
import img2 from "../../Assets/Catagories/commerce.png";
import img3 from "../../Assets/Catagories/arts.png";
import img4 from "../../Assets/Catagories/allteacher.png";
import { motion } from "framer-motion";


const SubjectWiseTeachers = () => {
  return (
    <div className="mt-8 mb-9">
      <motion.h1
        id="title"
        className="text-4xl font-bold -mt-8 lg:mt-0 text-[#1aa3d0] dark:text-[#1aa3d0]"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Department
      </motion.h1>
      <motion.p
        className="mt-2 text-2xl lg:text-dark dark:text-[#DBDBDB]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", duration: 2 }}
      >
        Select which department you need a teacher for
      </motion.p>
      {/* {backgrounds.map((category) => ( */}
      <div className=" max-w-screen-lg mt-10 mb-10 mx-auto grid grid-cols-1">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 py-1  text-[#1aa3d0]  dark:text-[#1aa3d0] mx-auto">
          {/* Science Department */}
          
            <Link to={"/Science"}>
              <a href="#g" className="group relative block h-36 ">
              <div className="flex-shrink-0 mx-2 -mb-6 photoo relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={img1} alt="products" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                        Science
                                    </span>
                                </div>
                            </div>
                        </div>
              </a>
            </Link>
         

          {/* Commerce Department */}
          <Link to={"/Commerce"}>
              <a href="#g" className="group relative block h-36 ">
              <div className="flex-shrink-0 mx-2 -mb-6 photoo relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={img2} alt="products" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                    Commerce
                                    </span>
                                </div>
                            </div>
                        </div>
              </a>
            </Link>

          {/* Arts Department */}
          <Link to={"/Arts"}>
              <a href="#g" className="group relative block h-36 ">
              <div className="flex-shrink-0 mx-2 -mb-6 photoo relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={img3} alt="products" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                    Arts
                                    </span>
                                </div>
                            </div>
                        </div>
              </a>
            </Link>

          {/* All Department */}
          <Link to={"/all-TeachersHome"}>
              <a href="#g" className="group relative block h-36 ">
              <div className="flex-shrink-0 mx-2 -mb-6 photoo relative overflow-hidden bg-gray-200 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={img4} alt="products" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                    All-Teachers
                                    </span>
                                </div>
                            </div>
                        </div>
              </a>
            </Link>
        </div>
      </div><br></br><br></br>
    </div>




  );
};

export default SubjectWiseTeachers;