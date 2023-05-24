import React from 'react';
import './Courses.css'

const Courses = () => {

    const styleObject = {
        button: {
          background: '#2A9D8F',
        },
        textcolor: {
        //   color: '#2A9D8F',
        }
      };


    return (
        <div className='py-9'>
            <div>
            <p style={styleObject.textcolor} className="text-center text-5xl bg-gradient-to-r text-blue-600 font-semibold">Our Courses</p>
            <h1  className="text-center px-3 md:px-0  text-3xl md:text-2xl font-semibold text-black mb-10 mt-2">Quality Education For All Students. </h1>
            </div>
            {/* ------------Services Card------------- */}
            <div className='grid lg:grid-cols-4 px-4 md:grid-cols-2 place-items-center gap-y-14 grid-cols-1 p-9'>

                {/* ------services-1------ */}
                    <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize pt-1 hover:scale-110 ease-in duration-80 overflow-hidden">
                            <div className='flex justify-center'>
                            <img className="rounded w-40" src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="ss" />
                            </div>
                        <div className="text-center p-6">
                            <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-3 dark:text-white"> 
                            React.js Crash Course
                            </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        These loans are designed to support social enterprises, non-profit
                         organizations, and other businesses that have a strong social or environmental mission.
                        </p>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize pt-1 hover:scale-110 ease-in duration-80 overflow-hidden">
                            <div className='flex justify-center'>
                            <img className="rounded w-40" src="https://www.pngitem.com/pimgs/m/1-15848_node-js-node-js-hd-png-download.png" alt="ss" />
                            </div>
                        <div className="text-center p-6">
                            <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-3 dark:text-white"> 
                            Node.js Crash Course
                            </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        These loans are designed to support social enterprises, non-profit
                         organizations, and other businesses that have a strong social or environmental mission.
                        </p>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize pt-1 hover:scale-110 ease-in duration-80 overflow-hidden">
                            <div className='flex justify-center'>
                            <img className="rounded w-72" src="https://namespaceit.com/uploads/post/image/1626089870.jpg" alt="ss" />
                            </div>
                        <div className="text-center p-6">
                            <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-3 dark:text-white"> 
                            Next.js Crash Course
                            </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        These loans are designed to support social enterprises, non-profit
                         organizations, and other businesses that have a strong social or environmental mission.
                        </p>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize pt-1 hover:scale-110 ease-in duration-80 overflow-hidden">
                            <div className='flex justify-center'>
                            <img className="rounded w-40" src="https://img.stackshare.io/service/7374/react-redux.png" alt="ss" />
                            </div>
                        <div className="text-center p-6">
                            <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-3 dark:text-white"> 
                      Redux Crash Course
                            </h5>
                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                        These loans are designed to support social enterprises, non-profit
                         organizations, and other businesses that have a strong social or environmental mission.
                        </p>
                        </div>
                    </div>

                {/*------services-2------*/}
                  
                {/*------services-3------*/}
                 
                {/*------services-4------*/}
                       
            </div>
        </div>
    );
};

export default Courses;