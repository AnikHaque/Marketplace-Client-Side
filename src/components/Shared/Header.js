import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {  BsMoonFill, BsSunFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { HashLink } from 'react-router-hash-link';
import { Transition } from "@headlessui/react";

const Header = () => {
  const { user, logUser, logOut, theme, setTheme } = useContext(AuthContext);
  console.log(user);
  // console.log("header logUser role", logUser);

    const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }


        const [isOpen, setIsOpen] = useState(false);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/authentication/login");
    logOut()
      .then(() => {
        toast.error("Log Out!");
        navigate("/authentication/login");
      })
      .catch((error) => console.error(error));
  };

  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      padding: "5px",
      borderRadius: "2px",
      borderBottom: isActive ? "3px solid #00A99D" : "none",
    };
  };

  const navList = (
    <ul className="mb-4 font-bold mt-2 flex flex-col text-gray-200  dark:text-[#00A99D] lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavLink style={navStyle} to={"/"} className="flex   justify-center items-center">
        Home
      </NavLink>

      <NavLink style={navStyle} to={"/blog"} className="flex justify-center items-center">
        Blog
      </NavLink>

      {/* {user?.uid && ( */}
      <NavLink style={navStyle} to={"/dashboard"} className="flex  justify-center items-center">
        Dashboard
      </NavLink>
      {/* )} */}

      <NavLink style={navStyle} to={"/contact"} className="flex justify-center items-center">
        Contact
      </NavLink>
      <NavLink style={navStyle} to={"/gallery"} className="flex justify-center items-center">
        Gallery
      </NavLink>

      <NavLink style={navStyle} to={"/about-us"} className="flex justify-center items-center">
        About
      </NavLink>

      {logUser?.role === "Teacher" && (
        <NavLink style={navStyle} to={"/dashboard/skill-assessments"} className="flex justify-center items-center">
          Assessment Test
        </NavLink>
      )}

      {logUser?.role === "Student" && (
        <NavLink style={navStyle} to={"/dashboard/student-post-box"} className="flex justify-center items-center">
          Post
        </NavLink>
      )}

      {/* Profile Items */}

      <NavLink
        to={"/profile"}
        className="flex lg:hidden justify-center items-center dark:bg-black dark:text-[#bb86fc] "
      >
        Profile
      </NavLink>
      {user ? (
        <a href="/" onClick={handleLogOut} className="flex lg:hidden text-red-600 justify-center items-center">
          Sign Out
        </a>
      ) : (
        <>
          <NavLink to={"/login"} className="flex lg:hidden justify-center mt-2  items-center">
            Sign In
          </NavLink>
          <NavLink to={"/signup"} className="flex lg:hidden justify-center mt-2   items-center">
            Sign Up
          </NavLink>
        </>
      )}
    </ul>
  );

  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>

    <img src="https://i.ibb.co/Bz8QR2F/channels4-profile-removebg-preview.png" alt="" className="w-16 ml-9"></img>
    <h1 className="font-bold text-gray-700 text-2xl">Market <span className="font-bold text-sky-600 text-2xl">Place</span></h1>
  </div>
  <div className="ml-[-350px] hidden lg:flex">
    <ul className="menu menu-horizontal lg:mr-16">
      <li className="text-black "><Link>About</Link></li>
      <li className="text-black "><Link>Dashboard</Link></li>
      <li className="text-black "><Link>About</Link></li>
      <li className="text-black "><Link>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
     <div className="dropdown dropdown-end  hidden lg:block">
              {/* {user?.uid && ( */}
              <label tabIndex={0} className=" cursor-pointer">
                <div className="avatar  ">
                  <div className="w-12 rounded-full ring mr-8 mt-2 ">
                    {user ? (
                      <img alt="userImage" src={user?.photoURL} />
                    ) : (
                      <img
                        alt="userImage"
                        // src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                        src="https://static.vecteezy.com/system/resources/previews/007/319/933/original/black-avatar-person-icons-user-profile-icon-vector.jpg"
                      />
                    )}
                  </div>
                </div>
              </label>
              {/* )} */}
              <ul
                tabIndex={0}
                className=" p-2 text-black dark:bg-black dark:text-[#bb86fc] font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <Link to="/dashboard" className="justify-between">
                        {user?.displayName}
                      </Link>
                    </li>

                    <li>
                      <button className="text-red-600" onClick={handleLogOut}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Signup</Link>
                    </li>
                  </>
                )}
              </ul>{" "}
              
            </div>
             <label className="swap hidden  lg:inline-flex swap-rotate  mr-4">
              <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
              <BsSunFill className="swap-on fill-current text-yellow-500 text-4xl " />
              <BsMoonFill className="swap-off fill-current -ml-7 text-slate-500 text-4xl" />
            </label>
            </div>
        </div>









        {/* 2nd Navbar  */}
              {/* responsive-mobile */ }
       <nav className="md:hidden shadow-sm w-full z-10">
         <div className="w-full">
           <div className="flex items-center h-20 w-full">
             <div className="flex bg-gray-800 bg-opacity-60 z-20 top-0 backdrop-filter backdrop-blur-lg shadow-sm w-full fixed items-center md:mx-20 justify-between">
               <div className="flex justify-center items-center flex-shrink-0">
                 <div className="mr-10 flex md:hidden ">
                   <button
                    onClick={ () => setIsOpen(!isOpen) }
                    type="button"

                    className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none  "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    { !isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) }
                  </button>
                </div>
                <Link to="/">
                  <h1 className="flex items-center button font-bold text-xl cursor-pointer">
                    <p className="text-black">Market Place</p>
                  </h1>
                </Link>
              </div>
              <div>
                <Link to='/' className="cursor-pointer flex items-center ">
                  <img
                    className="md:w-12 w-14"
                    src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                    alt="project-logo"
                    border="0"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>




        {/*  */}
        <nav className="shadow-sm w-full ">
        <Transition
          show={ isOpen }
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          { (ref) => (
            <div className="md:hidden flex justify-center items-center" id="mobile-menu">
              <div ref={ ref } className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <HashLink
                  to="/#home" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </HashLink>
                <HashLink smooth
                  to="/#organization" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </HashLink>

                <HashLink smooth
                  to="/#courses" scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer  text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Courses
                </HashLink>
                <HashLink smooth
                  to='/#blogs' scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blogs
                </HashLink>
                <HashLink smooth
                  to='/#contact' scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </HashLink>

                
              </div>
            </div>
          ) }
        </Transition>
        <div className="flex justify-start bg-gray-900 p-2">
          <div className="text-white ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <HashLink
                  to="/#home" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer  font-semibold px-3 py-2 text-md "
                >
                  Home
                </HashLink>
                <HashLink smooth
                  to="/#organization" scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </HashLink>
                <HashLink smooth
                  to="/#courses" scroll={ el => scrollWithOffset(el) }

                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </HashLink>
                <HashLink smooth
                  to='/#blogs' scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </HashLink>
                <HashLink smooth
                  to='/#contact' scroll={ el => scrollWithOffset(el) }
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;








