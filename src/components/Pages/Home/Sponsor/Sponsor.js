import React from "react";
import { Link } from "react-router-dom";
import "./Sponsor.css";

const Sponsor = () => {
  
  return (
    <div className="container mx-auto my-10 lg:p-9">
      <h2 className="md:text-4xl text-3xl text-center font-bold text-left text-blue-600">
        Explore the marketplace
      </h2>
      <div className="grid  md:grid-cols-5 gap-4 mt-10 grid-cols-2">
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
        <div className="card  bg-gray-50  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;