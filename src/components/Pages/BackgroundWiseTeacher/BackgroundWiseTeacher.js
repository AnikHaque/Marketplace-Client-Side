import React, { useEffect, useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
import { BsHourglassSplit, BsFillPersonFill, BsArrowRightShort, BsArrowRight } from "react-icons/bs";

const BackgroundWiseTeacher = () => {
  const Alldata = useLoaderData();
  // console.log(Alldata);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-screen-xl p-5">
            {Alldata?.data?.map((data, idx) => {
              return (
                <div key={idx} className="">
                  
                 <div className="card w- bg-base-100 shadow-xl">
                 <figure><img className="h-[220px] w-[300px]" src={data?.image} alt="Shoes" /></figure>
                  <div className="card-body">
                  <div className="">
                            
                            <h5 className="text-[#1AA3D0] text-md dark:text-[#00A99D]  font-bold text-md flex tracking-tight">
                              <FaBookReader className="mt-1 text-sm  text-black ml-1 mr-3" />{" "}
                              {data?.background}
                            </h5>

                            <p className="font-bold text-md flex    text-gray-800">
                              <BsFillPersonFill className="mt-1 text-md mr-2 gap-2" />
                              {data?.name}
                            </p>

                            <p className="font-bold text-md  mb-3 flex   text-gray-800">
                              <BsHourglassSplit className="mt-1 text-lg mr-2" />{" "}
                              {data?.experience} years experience
                            </p>

                            <div>
                              <Link to={`/data/${data?._id}`}>
                                <button className="flex justify-start ml-1 bg-gradient-to-r from-[#045DE9] to-[#09C6F9] p-2 rounded-md text-white ">
                                  <span className="text-white">
                                    View More
                                  </span>
                                </button>
                              </Link>
                            </div>
                          </div>
  </div>
</div>
                </div>
              );
            })}
          </div>
  );
};

export default BackgroundWiseTeacher;
