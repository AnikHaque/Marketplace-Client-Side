import React, { useContext, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../../hooks/useToken";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
import signUp from "../../Assets/Animation/SignUpAnimation.json"
import Lottie from "lottie-react";


const SignUp = () => {

  function onChange(value) {
  console.log("Captcha value:", value);
}
  const { createUser,  googleSignIn, twitterSignIn, updateUser, user } =
    useContext(AuthContext);
    const auth = getAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const [registeredUserEmail, setRegisteredUserEmail] = useState("");
  const [token] = useToken(registeredUserEmail);
  if (token) {
    navigate("/login");
  }
  //   console.log(user?.displayName);

  const handleRegisterform = (data) => {
    console.log(data);
    console.log(data.userName);
    console.log(data.type);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.userName,
        };
        console.log(userInfo);
        verifyEmail();

        // update user info
        updateUser(userInfo)
          .then(() => {
            saveRegisteredUser(data.userName, data.email, data.type);
          })
          .catch((error) => console.error(error));
      })
      .catch((err) => console.error(err));
  };

// Email Verification 
const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
   toast("Check Email for Verification")
  });
}

  //   function to save registered users data
  const saveRegisteredUser = (name, email, role) => {
    const registeredUser = { name, email, role };
    fetch(" http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registeredUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // registeredUserToken(email);
        setRegisteredUserEmail(email);
        console.log(data);
      });
  };


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user.displayName, user.email);
        const role = "Buyer";
        saveRegisteredUser(user.displayName, user.email, role);
        toast.success("Sign In Succssful");
      })
      .catch((error) => console.error(error));
  };
  const handleTwitterSignIn = () => {
    twitterSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user.displayName, user.email);
        const role = "Buyer";
        saveRegisteredUser(user.displayName, user.email, role);
        toast.success("Sign In Succssful");
      })
      .catch((error) => console.error(error));
  };


  return (
    
//     <div>
//     <div className="grid grid-cols-1 lg:grid-cols-2">
// <div className="w-[100%] lg:px-16">
// <Lottie loop={true} animationData={signUp} />
// </div>
// <div>
// <div class="main_div mt-4 ml-20 mb-4">
//     <div class="title">Register Form</div>
//     <div class="social_icons">
//       <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
//       <Link onClick={handleGoogleSignIn}><i class="fa-brands fa-google"></i><span>Google</span></Link>
//     </div>
//     <form onSubmit={handleSubmit(handleRegisterform)}>
//            <div className="form-control  w-full max-w-xs">
//             <input
//               type="text"
//               {...register("userName", {})}
//              className="input input-bordered w-full  max-w-xs mb-2"
//              placeholder="User Name"
//              />
//             {errors.email && (
//               <p className="text-red-600">{errors.email?.message}</p>
//             )}
//           </div>
//           <div className="form-control  w-full max-w-xs">
//             <input
//                type="text"
//               {...register("email", {
//                 required: "Email Address is required",
//               })}
//               placeholder="Email Address"
//                className="input input-bordered w-full mb-2 max-w-xs"
//              />
//             {errors.email && (
//                <p className="text-red-600">{errors.email?.message}</p>
//             )}
//           </div>
//            <div className="form-control w-full max-w-xs">
           
//              <input
//                type="password"
//                {...register("password", {
//                 required: "Password is required",
//                  minLength: {
//                    value: 6,
//                    message: "Password must be 6 characters or longer",
//                  },
//                })}
//                placeholder="Password"
//               className="input input-bordered w-full  max-w-xs"
//              />
            
//             <select
//                {...register("type", {})}
//                className="select w-full bg-white max-w-xs"
//              >
//                <option>Select Your Account Type</option>
//             <option>Teacher</option>
//                <option>Student</option>
               
//              </select>
            
//              {errors.password && (
//                <p className="text-red-600">{errors.password?.message}</p>
//              )}
//            </div>

//            <div>
//            <ReCAPTCHA
//     sitekey="6LcbIsklAAAAAKbYZrySlY59OCj3e3gjP4lj7YC9
// "
//     onChange={onChange}
//   />,
//            </div>
          
//            <input
//              className="btn btn-primary w-full"
//              value="Register"
//              type="submit"
//            />
//            <div class="option_div">
//         <div class="check_box">
//           <input type="checkbox" />
//           <span>Remember me</span>
//         </div>
//         <div class="forget_div">
//           <a href="#">Forgot password?</a>
//         </div>
//       </div>
//            <div>
//              {signUpError && <p className="text-red-600">{signUpError}</p>}
//            </div>
//            <div class="sign_up">
//         Already an member? <Link to="/login"><a>Login now</a></Link>
//       </div>
//          </form>
//   </div>
// </div>
//     </div>
//   </div>


<div className="signup-container text-black mt-4">
<div className="flex md:flex-row flex-col justify-evenly items-start">
  {/* Lottie File */}
  <div className="max-w-md px-6 md:px-0 pb-10 md:pb-0 mt-5 md:mt-14">
  <Lottie loop={true} animationData={signUp} />
  </div>

  {/* Form */}
  <div className=" pb-5">
    <h1 className="md:text-4xl text-2xl text-blue-600  mb-5 text-center ">Create Account</h1>
    <div className="px-2 md:px-0">
    {/* Social Login */}
    <div className="flex justify-center py-2 space-x-2">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 bg-sky-500  w-[50%] text-white rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className=" w-5 h-5 fill-current mx-auto">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    <button onClick={handleTwitterSignIn} aria-label="Log in with Twitter" className="p-1 bg-sky-500  w-[50%] text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" className=" w-7 h-7 fill-current mx-auto">
                    <path d="M42,12.429c-1.323,0.586 -2.746,0.977 -4.247,1.162c1.526,-0.906 2.7,-2.351 3.251,-4.058c-1.428,0.837 -3.01,1.452 -4.693,1.776c-1.344,-1.425 -3.261,-2.309 -5.385,-2.309c-4.08,0 -7.387,3.278 -7.387,7.32c0,0.572 0.067,1.129 0.193,1.67c-6.138,-0.308 -11.582,-3.226 -15.224,-7.654c-0.64,1.082 -1,2.349 -1,3.686c0,2.541 1.301,4.778 3.285,6.096c-1.211,-0.037 -2.351,-0.374 -3.349,-0.914c0,0.022 0,0.055 0,0.086c0,3.551 2.547,6.508 5.923,7.181c-0.617,0.169 -1.269,0.263 -1.941,0.263c-0.477,0 -0.942,-0.054 -1.392,-0.135c0.94,2.902 3.667,5.023 6.898,5.086c-2.528,1.96 -5.712,3.134 -9.174,3.134c-0.598,0 -1.183,-0.034 -1.761,-0.104c3.271,2.071 7.155,3.285 11.324,3.285c13.585,0 21.017,-11.156 21.017,-20.834c0,-0.317 -0.01,-0.633 -0.025,-0.945c1.45,-1.024 2.7,-2.316 3.687,-3.792"></path>
                        </svg>
                    </button>
                </div>

    <form onSubmit={handleSubmit(handleRegisterform)}>
        
        {/* First Name And Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-4 md:mb-3">
            <input
              {...register("userName", {
                required: 'Please Enter Your First Name',
              })}
              type="text"
              id="name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
              required
              autoComplete='off'
            />
            {errors.email && (
               <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="mb-4 md:mb-3">
            <input
              {...register("userName", {
                required: 'Please Enter Your Last Name',
              })}
              type="text"
              id="name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
              required
              autoComplete='off'
            />
            {errors.email && (
               <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
        </div>

        {/* Email And Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-4 md:mb-3">
            <input
              { ...register('email', {
                required: 'Please Enter Your Email!',
              }) }
              type="email"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              required
              autoComplete='off'
            />
            {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
            )}          
            </div>

          <div className="mb-6 md:mb-3">
            <input
              { ...register('phone', {
                required: 'Please Enter Your Phone Number!',
              }) }
              type="text"
              id="name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mobile Number"
              required
              autoComplete='off'
            />
            {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
            )} 
          </div>
        </div>

        {/* Select Users */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="mb-4 md:mb-3">
          <select
                {...register("type", {})}
                className="select w-full bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Your Account Type</option>
                <option>Teacher</option>
                <option>Student</option>
               
          </select>
          </div>
        </div>

        {/* Password ANd COmfirm password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-6 md:mb-3">
            <input
              { ...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be more than 8 characters',
                },
                maxLength: {
                  value: 12,
                  message:
                    'Password cannot exceed more than 12 characters',
                },
              }) }
              placeholder="Enter Password"
              type="password"
              id="password"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              autoComplete='off'
            />
            <p className="alerts text-red-600">
              { errors.password?.message }
            </p>
          </div>
          <div className="mb-4">
            <input
              { ...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be more than 8 characters',
                },
                maxLength: {
                  value: 12,
                  message:
                    'Password cannot exceed more than 12 characters',
                },
              }) }
              placeholder="COnfirm Password"
              type="password"
              id="password"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              autoComplete='off'
            />
            <p className="alerts text-red-600">
              { errors.password?.message }
            </p>
          </div>
        </div>

        {/* photo set */ }
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <div className="mb-2 md:mb-3">
            <input
              { ...register('email', {
                required: 'Please Enter Your NID OR Birth Certificate!',
              }) }
              type="text"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Photo"
              required
              autoComplete='off'
            />
            {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
            )}          
            </div>
        </div>

        {/* NID OR Birth Certificate */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <div className="mb-2 md:mb-3">
            <input
              { ...register('email', {
                required: 'Please Enter Your NID OR Birth Certificate!',
              }) }
              type="text"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="NID OR Birth Certificate"
              required
              autoComplete='off'
            />
            {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
            )}          
            </div>
        </div>
        
        <input
             className="btn bg-gradient-to-r from-[#045DE9] to-[#09C6F9] w-full"
             value="Register"
             type="submit"
           />
      </form>
            <div>
             {signUpError && <p className="text-red-600">{signUpError}</p>}
            </div>
            <div class="text-sm sign_up p-3">
              Already an member? <Link className="text-md" to="/login">Login now</Link>
            </div>
    </div>
  </div>

</div>
</div>

  );
};

export default SignUp;
