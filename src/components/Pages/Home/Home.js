// configuration 
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

// 3rd party packages 
import Lottie from "lottie-react";

// Normal Import 
import SubjectWiseTeachers from "./SubjectWiseTeachers";
import ContactUs from "./ContactUs";
import Loader from "../../Shared/Loader";
import SearchQuery from "./SearchQuery";
import SearchAnimation from "../../Assets/Animation/SearchAnimation.json";
import AboutOurs from "../About/AboutOurs";
import FaqAnswer from "./FAQ/FaqAnswer";
import GoToTop from "./GoTotop";

// Normal CSS 

// Custom CSS 
import Sponsor from "./Sponsor/Sponsor";
import Testimonial from "../Testimonials/Testimonial";
import Courses from "../Courses/Courses";
import Hero from "./Hero/Hero";
import NewsLetter from "./NewsLetter/NewsLetter";
import Catagories from "./Catagories/Catagories";


const Home = () => {
  // fIREBASE 
  const { user, loading, filteredData, setFilteredData } =
    useContext(AuthContext);

    // React 
  const [data, setData] = useState([]);

  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setData(data?.data))
      .finally(() => {});
  }, []);

  //! Data Query
  function handleFilter(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    // console.log(data);
    const filtered = data?.filter((item) => {
      return (
        item?.name?.toLowerCase().includes(query) ||
        item?.location?.toLowerCase().includes(query) ||
        item?.background?.toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
    setHasSearched(true);
  }

  console.log(filteredData);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
    <Hero></Hero>

      {/* tutor Search Field*/}
      <div className="my-5 text-2xl font-semibold mx-10">
        <h1 className="text-[#1AA3D0] dark:text-[#00A99D]">
          Name/ Location / Department
        </h1>
        {/* <div className=" bg-gradient-to-r from-[#5200AE] to-[#4062BB] ... rounded-lg mt-4 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3">
            {filteredData[1] ? (
              <Lottie
                className="h-96"
                animationData={SearchAnimation}
                loop={true}
              ></Lottie>
            ) : (
              <Lottie
                className="h-24"
                animationData={SearchAnimation}
                loop={true}
              ></Lottie>
            )}
          </div>

          <div className="lg:col-span-9 mx-5 mb-5">
            <div
              id="searchBox"
              className="px-4 flex flex-col py-5 sm:flex-row justify-center items-start sm:items-center dark:rounded-b-lg"
            >
              <input
                placeholder="Search your tutor"
                type="text"
                className="text-black h-12 w-1/2 focus:outline-none focus:border-0 rounded-l-full"
                onChange={handleFilter}
              />
              <button className="btn bg-[#0B7A73] hover:bg-[#096963] rounded-r-full h-10 text-xl">
                Search
              </button>
            </div>

            <div>
              {filteredData.length > 0 && (
                <div id="search">
                  <SearchQuery filteredData={filteredData} />
                </div>
              )}
              {hasSearched && filteredData.length === 0 && (
                <p>No results found.</p>
              )}
            </div>
          </div>
        </div> */}
      </div>

      <SubjectWiseTeachers />
      <AboutOurs />
      <Catagories/>
      <Courses></Courses>
      <FaqAnswer />
      <Sponsor />

      {/* <AllTeacherSlider /> */}
      {/* {user && <StudentPostBox />} */}
      
      {/* {user?.uid &&
      <div id="studentsPost">
      <GetStudentsPost />
      </div>
      }

      {user?.uid && (
        <div id="review">
          <Reviews />
        </div>
      )} */}

<Testimonial></Testimonial>
<NewsLetter></NewsLetter>
      {/* <div id="beATeacher">
       
      </div> */}

      {/* <StudentPost /> */}

      {user?.uid && (
        <div id="contact">
          <ContactUs />
        </div>
      )}

      <GoToTop/>
    </div>
  );
};

export default Home;
