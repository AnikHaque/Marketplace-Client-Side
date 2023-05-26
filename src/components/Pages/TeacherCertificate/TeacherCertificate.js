import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
// import premeumLogo from '../../Assets/Images/premeium-award.png'
import "./TeacherCertificate.css"


const TeacherCertificate = () => {
    const { user } = useContext(AuthContext)
    return (
        <div >
            <h1 className='text-2xl font-extrabold mt-5'>Certification</h1>

            <div className='flex justify-center items-center  mt-10'>
                <img src='premeumLogo' alt=''/>
                <div className='w-[60%] h-[60%] certificate shadow-xl'>
                    <div className=' p-6 w-full flex justify-center items-center   h-[370px] mt-3  '>
                        <div className="content pl-9">
                            <h1 className='mt-3 pl-16 text-xl font-semibold text-gray-800'>{user?.displayName} </h1>
                            <h1 className='mt-3 pl-16 text-gray-800'>{user?.email}</h1>
                        </div>

                    </div>



                    {/* <div className='border w-96 col-span-2 overflow-visible border-black h-[400px] bg-red-100'>
    <div className='border w-96 overflow-visible h-[400px] rounded-l-3xl bg-blue-100'>

        <div className="avatar mt-36 ml-[-380px]">
            <div className="w-40 rounded-full ring-offset-base-100 ring-offset-2">
                <img src={premeumLogo} alt='' />
            </div>
        </div>

    </div>
</div> */}
                </div>
            </div>


        </div>
    );
};

export default TeacherCertificate;