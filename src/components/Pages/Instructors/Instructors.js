import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsHourglassSplit } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";




const Instructors = () => {


const { logUser } = useContext(AuthContext);
const [allInstructor, setInstructors] = useState({});
const [filteredData, setFilteredData] = useState({});
// console.log(allInstructor.data);
const [loading, setLoading] = useState(false);
useEffect(() => {
setLoading(true);
fetch(`http://localhost:5000/tutors`)
.then((res) => res.json())
.then((data) => setInstructors(data))
.finally(() => {
setLoading(false);
});
}, []);
//! Sorting START ----
// Extract the "location" property from each object and create a new array
const namesArray = allInstructor?.data?.map((data) => data.location);
// To map an array in JSX while displaying one value just one time
const uniqueItems = [...new Set(namesArray)];
//! Sort by their location and department
function handleFilter(event) {
const query = event.target.value.toLowerCase();
console.log(query);
// console.log(data);
const filtered = allInstructor?.data?.filter((item) => {
return (
item?.location?.toLowerCase().includes(query) ||
item?.background?.toLowerCase().includes(query)
);
});
setFilteredData(filtered);
console.log(filtered);
}
//! Loader
if (loading) {
return 
<Loader />
;
}
return (
<div className="m-5">
   {/*FIXME: Data Sort */}
   <div className="flex justify-between mx-10">
      {/*todo: Data Sorting by location */}
      <div className="flex justify-end my-2">
         <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text"></span>
            <span className="label-text-alt dark:text-gray-200 font-bold">
            Sort by location
            </span>
            </label>
            <select
               onChange={handleFilter}
               name="category"
               className="select select-bordered w-full max-w-xs dark:text-gray-700"
               >
               <option disabled selected>
                  Choose one
               </option>
               {uniqueItems?.map((data, idx) => (
               <option key={idx}>{data}</option>
               ))}
            </select>
         </div>
      </div>
      {/*todo: Data Sorting by department */}
      <div className="flex justify-end my-2">
         <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text"></span>
            <span className="label-text-alt dark:text-gray-200 font-bold">
            Sort by department
            </span>
            </label>
            <select
               onChange={handleFilter}
               name="category"
               className="select select-bordered w-full max-w-xs dark:text-gray-700"
               >
               <option disabled selected>
                  Choose one
               </option>
               <option>Science</option>
               <option>Commerce</option>
               <option>Arts</option>
            </select>
         </div>
      </div>
   </div>
   {/*todo: Data Load */}
   <div>
      {filteredData[1] ? (
      <div className="grid sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-2 md:gap-6  gap-4 max-w-screen-xl mx-auto">
         {filteredData?.map((instructor, idx) => {
         return (
         <div key={idx} className="">
            <div className=" card card-compact bg-base-300  mx-auto shadow-xl">
               <figure><img src={instructor?.image} alt="phone" /></figure>
               <div className="p-5">
                  <h5 className="text-[#1AA3D0] dark:text-[#00A99D] font-bold text-md flex tracking-tight">
                     <FaBookReader className="mt-1   text-black ml-1 mr-2" />
                     {" "}
                     {instructor?.background}
                  </h5>
                  <p className="font-bold text-xl flex    text-gray-800">
                     <BsFillPersonFill className="mt-1 mr-1" />
                     {instructor?.name}
                  </p>
                  <p className="font-bold text-md  mb-3 flex   text-gray-800">
                     <BsHourglassSplit className="mt-1 text-xl mr-2" />
                     {" "}
                     {instructor?.experience} years experience
                  </p>
                  <div className="">
                     <Link to={`/instructor/${instructor?._id}`}>
                     <button className="learn-more ">
                     <span
                        className="circle bg-[#1AA3D0] dark:bg-[#00A99D]"
                        aria-hidden="true"
                        >
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text text-[#1AA3D0] dark:text-[#00A99D]">
                     Learn More
                     </span>
                     </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         );
         })}
      </div>
      ) : (
      <div className="">
         
         <div className="overflow-x-auto w-full">  
         
            <table className="table table-compact w-full">
            {/* head */}
            <thead>
              <tr>

                <th>Name</th>
                <th>Contact Info</th>
                <th>Experience</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allInstructor?.data?.map((instructor, idx) => {
         return (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={instructor?.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{instructor?.name}</div>
                      <div className="text-sm opacity-50">{instructor?.background}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {instructor?.email}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{instructor?.phone}</span>
                </td>
                <td>{instructor?.experience} Years</td>

                {/* edit and delete function */}
                <th>
             <td className="p-2 flex justify-end bg-transparent border-b  shadow-transparent ">
               <div className="flex">
                 <Link
                  className="font-semibold leading-tight text-xs text-slate-400 px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                
              </div>
            </td>
                </th>
                <th>
               
                  <Link
                  to={`/instructor/${instructor?._id}`}
                   className="text-white px-5 py-3 rounded-lg bg-blue-600 dark:bg-gray-200 ">Details</Link>
                </th>
              </tr>
              );
      })} 
            </tbody>
          </table>         
         </div>  
            
      
      </div>
      )}
   </div>
</div>
);
};
export default Instructors;