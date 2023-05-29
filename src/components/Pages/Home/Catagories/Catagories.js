import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    return (
        <div>
            <div className="container mx-auto">
      <h2 className="md:text-4xl text-3xl text-center font-bold text-left text-primary">
        Explore the marketplace
      </h2>
      <div className="grid  md:grid-cols-5 grid-cols-2 pl-16">
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-website-design-v2.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Website Design
            </h2>
          </div>
        </div>
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-translation.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Translation
            </h2>
          </div>
        </div>
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-python.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Python
            </h2>
          </div>
        </div>
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-excel.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Excel
            </h2>
          </div>
        </div>
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-photoshop-v2.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Photoshop
            </h2>
          </div>
        </div>
        <div className="flex ">
          <Link className=" pt-7 text-center">
            <img
              alt=" "
              src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/hire-mobile-apps-v2.svg"
              className="rounded-xl w-9 "
            />
          </Link>
          <div className="  p-0 line">
            <h2 className=" pt-9 lg:pl-2 text-sm lg:text-md ">
            Mobile Apps
            </h2>
          </div>
        </div>

      </div>
    </div>
        </div>
    );
};

export default Catagories;