import React from "react";
import img from "../../Assets/edumateLogo.png"



const EditProfileForm = () => {

  return (
    <div>
        <section className="p-9">
     <form >
           <div className="flex gap-10  flex-col-reverse	md:flex-row">
             <div className="w-full border-2 rounded-md  p-9  md:w-3/4">
               {/* first Name and Last Name */}
               <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="firstName"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="lastName"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    readOnly
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="mobile"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Phone
                  </label>
                </div>
              </div>

              {/* Education Information */}

              {/* University and Major */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="university"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your university
                  </label>
                  <select 
                    id="university"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option 
                      disabled
                      selected
                    >
                    </option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="majorSubject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your Major
                  </label>
                  <select 
                    id="majorSubject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                  </select>
                </div>
              </div>

              {/* degree and Batch number */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="degree"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    select your degree
                  </label>
                  <select 
                    id="degree"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    {/* <option
                      value={initialEducation?.degree ? initialEducation?.degree : ""}
                      disabled
                      selected
                    >
                      {initialEducation?.degree
                        ? initialEducation?.degree
                        : " Select your degree"}
                    </option>

                    {degreeNames &&
                      degreeNames.map((e) => (
                        <option value={e.degree}>{e.program_name} </option>
                      ))} */}
                  </select>
                  {/* {errors.degreeEarned && (
                    <span className="text-red-600">please select your Degree</span>
                  )} */}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="graduationYear"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Year of Graduation{" "}
                  </label>
                  <select
                    // {...register("graduation_year", { required: true })}
                    id="graduationYear"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    {/* <option
                      value={initialGraduation_year ? initialGraduation_year : ""}
                      disabled
                      selected
                    >
                      {initialGraduation_year
                        ? initialGraduation_year
                        : "Select your Graduation Year"}
                    </option>

                    {graduationYear &&
                      graduationYear.map((e) => (
                        <option value={e.batchNumber}>{e.batchNumber} </option>
                      ))} */}
                  </select>
                  {/* {errors.graduation_year && (
                    <span className="text-red-600">
                      please select your Gratuation Year
                    </span>
                  )} */}
                </div>
              </div>

              {/* Personal data Optional */}
              {/* Father and Mother */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    // {...register("fatherName")}
                    // defaultValue={initialPersonal_information?.fathers_name}
                    type="text"
                    name="fatherName"
                    id="floating_father_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_father_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your father name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    // {...register("motherName")}
                    // defaultValue={initialPersonal_information?.mothers_name}
                    type="text"
                    name="motherName"
                    id="floating_mother_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_mother_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Mother name
                  </label>
                </div>
              </div>

              {/* Blood Group and Gender */}
              <div className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="bloodGroup"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    select Blood Group
                  </label>
                  <select
                    // {...register("bloodGroup", { required: true })}
                    id="bloodGroup"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      selected
                      disabled
                      // value={initialPersonal_information?.blood_group}
                    >
                      {/* {initialPersonal_information?.blood_group
                        ? initialPersonal_information?.blood_group
                        : "Blood Group"} */}
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="bloodGroup"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your gender
                  </label>
                  <select
                    id="bloodGroup"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="birthDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your Date of Birth
                  </label>

                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    {/* <Controller
                      name="dateOfBirth"
                      // control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="date"
                          onChange={onChange}
                          value={value}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        />
                      )}
                    /> */}
                  </div>
                </div>
              </div>

              {/* Contact Details street and city */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    // defaultValue={initialAddress?.street}
                    type="text"
                    name="streetAddress"
                    id="floating_street"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_street"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Street
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="city"
                    id="floating_city"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_city"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City Name
                  </label>
                </div>
              </div>
              {/* Contact Details state and zip */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="stateName"
                    id="floating_state"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_state"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    State
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="zipCode"
                    id="floating_zip"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_zip"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    zip
                  </label>
                </div>
              </div>

              {/* submit button */}
              <button
                // disabled={isLoading}
                type="submit"
                className="text-white bg-gradient-to-r from-[#045DE9] to-[#09C6F9] hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Update Profile
              </button>
            </div>
            <div className="w-full md:w-1/4">
              <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
                <div>
                  <p className="font-medium">Photo *</p>
                  
                    <img
                      src={img}
                      alt="user"
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    />
                  
                    {/* <img
                      className="object-cover mb-6  h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      // src=""
                      alt=""
                    /> */}
                
                </div>
              </div>
            </div>
          </div>
        </form>
  </section>
    </div>
  );
};

export default EditProfileForm;