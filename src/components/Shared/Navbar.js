import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { AuthContext } from '../Context/AuthProvider';
// import SearchResultDisplayModal from '../Modals/SearchResultDisplayModal';

const Navbar = () => {
  // const { filteredData, setFilteredData } = useContext(AuthContext);

  //     const [showModal, setShowModal] = useState(false);

  //   const handleInputFocus = () => {
  //     console.log('on');
  //     setShowModal(true);
  //   };

  //   const handleModalClose = () => {
  //     console.log('off');
  //     setShowModal(false);
  //   };

  //   const [data, setData] = useState([]);

  //   const [hasSearched, setHasSearched] = useState(false);
  //   console.log('hasSearched', hasSearched);

  //   useEffect(() => {
  //     fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
  //       .then((res) => res.json())
  //       .then((data) => setData(data?.data))
  //       .finally(() => {});
  //   }, []);

  //       //! Data Query
  //   function handleFilter(event) {
  //     const query = event.target.value.toLowerCase();
  //     console.log(query);
  //     // console.log(data);
  //     const filtered = data?.filter((item) => {
  //       return (
  //         item?.name?.toLowerCase().includes(query) ||
  //         item?.location?.toLowerCase().includes(query) ||
  //         item?.background?.toLowerCase().includes(query)
  //       );
  //     });
  //     setFilteredData(filtered);
  //     setHasSearched(true);
  //   }

  //   console.log(filteredData);

  return (
    <div>
       <Navbar className="w-full border-none  bg-[#04516B] dark:bg-black dark:text-[#bb86fc] shadow-lg dark:border-0 max-w-screen-2xl py-6 px-4 rounded-none lg:px-8 lg:py-3">
        <div className="w-full container flex px-10 items-center max-w-screen-2xl mx-auto justify-between text-blue-gray-900">
          <Link to={"/"}>
            {theme === "dark" ? (
              <img className="w-32 lg:w-48" src={darkLogo} alt="darkLogo" />
            ) : (
              <img className="w-32 lg:w-48" src={darkLogo} alt="logo" />
            )}
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <div className="flex justify-center gap-9 items-center">
            <div className="dropdown dropdown-end  hidden lg:block">
              {/* {user?.uid && ( */}
              <label tabIndex={0} className=" cursor-pointer">
                <div className="avatar mt-3 ">
                  <div className="w-12 rounded-full ring  ">
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
                className="mt-3 p-2 text-black dark:bg-black dark:text-[#bb86fc] font-bold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
              </ul>{" "}z
            </div>
            <label className="swap hidden  lg:inline-flex swap-rotate mt-2">
              <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
              <BsSunFill className="swap-on fill-current text-yellow-500 text-4xl " />
              <BsMoonFill className="swap-off fill-current -ml-7 text-slate-500 text-4xl" />
            </label>
          </div>

          <button
            variant="text"
            className="  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <BsChevronUp className="text-3xl text-black dark:text-[#bb86fc]" />
            ) : (
              <BiMenu className="text-3xl text-black  dark:text-[#bb86fc]" />
            )}
          </button>
        </div>

        <MobileNav open={openNav}>
          <div>{navList}</div>

          <div className="flex">
            <label className="swap swap-rotate mr-5 my-2">
              <input onClick={handleThemeSwitch} className="hidden" type="checkbox" />
              <BsSunFill className="swap-on fill-current text-yellow-500 text-4xl" />
              <BsMoonFill className="swap-off fill-current text-slate-500 text-4xl" />
            </label>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navbar;
