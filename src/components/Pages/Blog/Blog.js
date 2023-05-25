import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
// import { motion } from "framer-motion";
import blogimg from "../../Assets/beateacher.jpg" 
import './Blog.css'

const Blog = () => {
  const [blogs, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // fetch(`blogdata.json`)
    fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`)
      .then((res) => res.json())
      .then((blog) => {
        setBlog(blog?.data)
        // console.log(blog);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  // console.log(blogs);

  return (
    // <div className="m-4 min-h-screen dark:text-gray-700">
    //   {/* <motion.h1
    //     id="title"
    //     className=" dark:text-gray-300 font-bold"
    //     initial={{ scale: 0.5 }}
    //     whileInView={{ scale: 2.1, translateY: 20 }}
    //     transition={{ duration: 1.5 }}
    //   >
    //     Popular <span className="border-b-4 border-[#7f1d1d] text-[#1AA3D0] dark:text-[#00A99D]">Articles</span>
    //   </motion.h1>
    //   <motion.div
    //     className="max-w-screen-xl mx-auto mt-36 grid grid-cols-1 lg:grid-cols-2 gap-5"
    //     whileInView={{ translateY: -70 }}
    //     transition={{ duration: 2 }}
    //   > */}
    //     {blogs &&
    //       blogs?.reverse()?.map((singleBlog, i) => (
    //         <Link key={i} to={`/blog/${singleBlog?._id}`}>
    //           {/* <motion.article
    //             className="rounded-xl border h-72 border-green-100  bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8"
    //             whileHover={{
    //               background: "linear-gradient(270deg, #1AA3D0 0%, #00A99D  100%)",
    //               color: "#f1f5f9",
    //             }}
    //           > */}
    //             <div className="flex hover:text-gray-900 items-start sm:gap-8">
    //               <div>
    //                 <strong className="rounded text-2xl font-bold text-start text-[#7f1d1d]  px-3 py-1 text-md  ">
    //                   {singleBlog?.category}
    //                 </strong>

    //                 <h3 id="title" className="mt-4 text-2xl hover:underline text-start font-bold ">
    //                   {singleBlog?.title}
    //                 </h3>

    //                 <p className="mt-1 text-start text-sm ">{singleBlog?.details?.slice(0, 98)}.....</p>

    //                 <div className="mt-4 flex justify-between">
    //                   <div>
    //                     <p className="text-start font-bold">{singleBlog?.authorName}</p>
    //                     <p className="text-start font-medium">{singleBlog?.authorRole}</p>
    //                   </div>
    //                   <div className="flex items-center gap-1 ">
    //                     <p className="text-md  font-medium">
    //                       <span className="mx-1">{singleBlog?.createdAt?.slice(11, 16)}</span>
    //                       <span className="mx-1">{singleBlog?.createdAt?.slice(0, 10)}</span>
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           {/* </motion.article> */}
    //         </Link>
    //       ))}
    //   {/* </motion.div> */}
    // </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 pr-9 pl-9">
    <div className="w-[150%] ">
      <div className="lg:p-5 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
      {blogs &&
          blogs?.reverse()?.map((singleBlog, i) => (
            <Link key={i} to={`/blog/${singleBlog?._id}`}>
              
                <div className="bg-white rounded-lg hover:text-gray-900 items-start sm:gap-8 lg:p-9">
                  <div>
                  <img className="w-[800px] h-[400px]" src={blogimg} alt="" />
                    <strong className="rounded text-2xl flex justify-start font-bold text-blue-600 pt-4 py-1 text-md  ">
                      {singleBlog?.category}
                    </strong>
                    <h3 id="title" className="mt-2 text-2xl hover:underline text-start font-bold ">
                      {singleBlog?.title}
                    </h3>

                    <p className="mt-1 text-start text-sm ">{singleBlog?.details?.slice(0, 98)}.....</p>

                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="text-start font-bold">{singleBlog?.authorName}</p>
                        <p className="text-start font-medium">{singleBlog?.authorRole}</p>
                      </div>
                      <div className="flex items-center gap-1 ">
                        <p className="text-md  font-medium">
                          <span className="mx-1">{singleBlog?.createdAt?.slice(11, 16)}</span>
                          <span className="mx-1">{singleBlog?.createdAt?.slice(0, 10)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
      </div>

    </div>
 
    <div className="w-[50%] mx-auto">
      <div className="card flex justify-end">
         <h2>About Me</h2>
         <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="me"/>
         <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div className="card">
         <h3>Popular Post</h3>
         <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="popular"/>
      </div>
    </div>
  </div>
  );
};

export default Blog;
