import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const RegisterAs = () => {
  const navigate = useNavigate();
  const { type } = useParams();

 

  return (
    <div className=''>
      <h1 className='text-center my-10 text-2xl'>Continue as ...</h1>
      <div className='flex justify-evenly '>
        <div
         
          className='flex flex-col justify-between transition-all rounded-lg h-72 border border-white hover:shadow-2xl hover:scale-105 group mb-8'
        >
          <img className='h-[77%]' src='https://raw.githubusercontent.com/mir-hussain/jobbox-starter/247f81cba0b477855e51e3b86092a86d1856e65b/src/assets/candidate.svg' alt='' />
          <p className='text-center text-3xl'>Seller</p>
        </div>
        <div
          className='flex flex-col justify-between transition-all rounded-lg h-72 border border-white  hover:shadow-2xl hover:scale-105 group'
        >
          <img className='h-[77%]' src='https://raw.githubusercontent.com/mir-hussain/jobbox-starter/247f81cba0b477855e51e3b86092a86d1856e65b/src/assets/employer.svg' alt='' />
          <p className='text-center text-3xl'>Buyer</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;