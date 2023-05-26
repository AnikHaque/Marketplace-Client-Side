import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

const AllStudents = () => {
  const { logUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [students, SetStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => SetStudent(data?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // delete student
  const deleteStudent = (data) => {
    console.log(data);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/${data?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.deletedCount > 0) {
          toast.success("Student removed 🤞");
          navigate("/");
        }
      });
  };
  if (loading) {
    return <Loader />;
  }

  // console.log(students);
  console.log(logUser);
  return (
    <div>

      {/* dextop version */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto w-full p-9">
            
            <table className="table  w-full dark:bg-gray-800">
            {/* head */}
            <thead className="dark:bg-black">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {students?.map((student, idx) => {
         return (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={student?.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{student?.name}</div>
                      <div className="text-sm opacity-50">{student?.background}</div>
                    </div>
                  </div>
                </td>
                <td>{student?.email}</td>
                <td>
                  <span className="badge badge-ghost badge-md">+880{student?.phone}</span>
                </td>
                

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
                  to={`/student/${student?._id}`}
                   className="text-white px-5 py-3 rounded-lg bg-gradient-to-r from-[#045DE9] to-[#09C6F9] dark:bg-gray-500 ">Details</Link>
                </th>
              </tr>
              );
      })} 
            </tbody>
          </table> 
          </div>
        
      </div>


{/* mobile version */}
      <div className="grid grid-cols-1 p-2 lg:hidden">
        {students?.map((student, idx) => (
          <div className="card  bg-base-100 shadow-xl">
          <figure><img className="h-[290px] w-[500px]" src={student?.image} alt="" /></figure>
          <div className="card-body">
             <div className="">
                <h5 className="text-[#1AA3D0] text-md dark:text-[#00A99D]  font-bold text-md flex tracking-tight">
                   {" "}
                   {student?.name}
                </h5>
                <p className="font-bold text-md flex text-gray-800">
                <MdMarkEmailUnread className="mt-1 mr-3" />
                   {student?.email}
                </p>
                
                <p className="font-bold text-md  mb-3 flex   text-gray-800">
                <BsTelephoneFill className="mt-1 mr-3" />
                   {" "}
                   {student?.phone} 
                </p>
                
             </div>
          </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;

