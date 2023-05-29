// import { useState, useEffect, useContext } from "react";
// import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
// import logo from "../Assets/Logos/EDU_LOGO.png";
// import darkLogo from "../Assets/Logos/EDU_Dark_Logo.png";
// import { AuthContext } from "../Context/AuthProvider";
// import { BsMoonFill, BsSunFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const AuthenticationHeader = () => {
//   const { theme, setTheme } = useContext(AuthContext);

//   const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-full bg-[#04516B] dark:bg-[#04516B] dark:text-[#bb86fc] dark:border-0 py-2 px-4 lg:px-8 lg:py-3">
//       <div className="container mx-auto flex items-center justify-between text-blue-gray-900 bg-transparent">
//         <Typography as="a" href="#" variant="small" className="mr-4 cursor-pointer font-normal">
//           <Link to={"/"}>
//             <span className="text-4xl font-bold">
//               {theme === "dark" ? (
//                 <img className="w-44" src={darkLogo} alt="darkLogo" />
//               ) : (
//                 <img className="w-44" src={darkLogo} alt="logo" />
//               )}
//             </span>
//           </Link>
//         </Typography>

//         <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
//           <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
//           <BsSunFill className="swap-on fill-current  text-white text-4xl " />
//           <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
//         </label>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               className="h-6 w-6"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         <div className="container mx-auto">
//           <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
//             <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
//             <BsSunFill className="swap-on fill-current  text-white text-4xl " />
//             <BsMoonFill className="swap-off fill-current -ml-7 text-yellow-500  text-4xl" />
//           </label>
//         </div>
//       </MobileNav>
//     </Navbar>
//   );
// };
// export default AuthenticationHeader;








import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {  BsMoonFill, BsSunFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const AuthenticationHeader = () => {
  const { user, logUser, logOut, theme, setTheme } = useContext(AuthContext);
  console.log(user);
  // console.log("header logUser role", logUser);

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
      <NavLink style={navStyle} to={"#"} className="flex   justify-center items-center">
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
          <NavLink to={"/authentication/login"} className="flex lg:hidden justify-center mt-2  items-center">
            Sign In
          </NavLink>
          <NavLink to={"/authentication/signup"} className="flex lg:hidden justify-center mt-2   items-center">
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
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src="https://i.ibb.co/Bz8QR2F/channels4-profile-removebg-preview.png" alt="" className="w-16"></img>
  </div>
  <div className="ml-[-100px] hidden lg:flex">
    <ul className="menu menu-horizontal ">
      <li className="text-black font-bold"><Link>Home</Link></li>
      <li className="text-black font-bold"><Link>About</Link></li>
      <li className="text-black font-bold"><Link>Dashboard</Link></li>
      <li className="text-black font-bold"><Link>Courses</Link></li>
      <li className="text-black font-bold"><Link>Blogs</Link></li>
      <li className="text-black font-bold"><Link>Contact</Link></li>
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
                      <Link to="/authentication/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/authentication/signup">Signup</Link>
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
    </div>
  );
};

export default AuthenticationHeader;