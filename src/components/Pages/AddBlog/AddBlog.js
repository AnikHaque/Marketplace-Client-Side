import React, { useContext } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                  toast('Added Successfully');
                    reset();
                }
            })
    };

  

  return (
    <div>
      <section className=" py-1 mt-5 bg-blueGray-50  dark:bg-black dark:text-black">
        <div className="lg:px-16">
          {/* <div className="flex justify-center items-center">
            <Lottie animationData={BlogAnimation} loop={true}></Lottie>
          </div> */}
          <div className="relative flex flex-col min-w-0 break-words w-full mb-2   ">
            <div className="flex-auto px-4 lg:px-10 py-16 pt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6 className="text-4xl py-5 font-bold text-blue-600 dark:text-gray-200">
                Create your Blog
                </h6>
                <div className="flex justify-between  ">
                  <div className=" w-full mb-3 me-4">
                    <input
                      {...register("Name")}
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                      required
                      className="input input-bordered w-full dark:bg-white "
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="email"
                      {...register("email")}
                      readOnly
                      required
                      defaultValue={user?.email}
                      className="input input-bordered w-full dark:bg-white "
                    />
                  </div>
                </div>


                <div className="flex justify-between items-center mb-3">
                  <div className="w-full">
                    <div >
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2 ">
                        
                      </label>
                      <input
                        type="text"
                        placeholder="Blog category"
                        {...register("category")}
                        required
                        className="input input-bordered w-full dark:bg-white "
                      />
                    </div>
                  </div>

                  {/* Author profession */}
                  <div className="w-full ms-3 ">
                    <div className="relative w-full ">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        
                      </label>
                      <input
                        type="text"
                        placeholder="Author Profession"
                        {...register("profession")}
                        required
                        className="input input-bordered w-full dark:bg-white "
                      />
                    </div>
                  </div>
                </div>


                {/* Blog image input */}

                <div className="flex gap-3 mb-3">
                  <div className="w-full  ">
                    <div className="w-full ">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        
                      </label>
                      <input
                        {...register("photo")}
                        placeholder="Blog Image"
                        type="text"
                        // required
                        className="input input-bordered w-full dark:bg-white "
                      />
                    </div>
                  </div>
                </div>

                {/* Blog title input */}

                <div className="flex flex-wrap">
                  <div className="w-full ">
                    <div className="relative w-full mb-3">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        
                      </label>
                      <input
                        {...register("title")}
                        placeholder="Blog title"
                        type="text"
                        required
                        className="input input-bordered w-full dark:bg-white "
                      />
                    </div>
                  </div>

                  {/* <div className="w-full lg:w-6/12 px-4">
                    <div className="w-full space-y-0.5">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Image
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        // required
                        className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-1   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div> */}

                  <div className="w-full lg:w-12/12 ">
                    <div className="relative w-full mb-3">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        
                      </label>
                      <textarea
                        type="text"
                        placeholder="Blog Details"
                        {...register("details")}
                        required
                        className="input input-bordered w-full dark:bg-white "
                      />
                    </div>
                  </div>
                </div>

                <div className=" mt-2">
                  <button
                    type="submit"
                    className="px-5 py-3 w-full rounded-lg bg-gradient-to-r from-[#045DE9] to-[#09C6F9] text-white font-semibold">
                    Submit
                  </button>
                </div>

                {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;