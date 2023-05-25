import React from 'react';
import CountUp from "react-countup";
import teacher from "../../Assets/teacher.png"
import student from "../../Assets/student.png"
import user from "../../Assets/users.png"
import course from "../../Assets/courses.png"

const WorksPlan = () => {
    return (
        <section class="bg-gray-50 text-gray-500 mb-9">
  <div class=" max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="mt-8 text-black grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* 1st */}
    <a
        class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="/services/digital-campaigns"
      >
        <img width="48" height="48" className='mx-auto' src={teacher} alt="training"/>
            <h6 className="text-3xl mt-2 font-bold lg:text-4xl text-gray-800 xl:text-5xl">
              <CountUp start={0} end={100} duration={200} delay={2}></CountUp>+
            </h6>
            <p className="text-sm text-gray-500 font-bold tracking-widest uppercase ">
              Teachers
            </p>
      </a>
      
      {/* 2nd */}
      <a
        class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="/services/digital-campaigns"
      >
        <img width="38" height="38" className='mx-auto ' src={student} alt="training"/>
            <h6 className="text-3xl mt-2 font-bold lg:text-4xl text-gray-800 xl:text-5xl">
              <CountUp start={0} end={355} duration={200} delay={2}></CountUp>+
            </h6>
            <p className="text-sm text-gray-500 font-bold tracking-widest uppercase ">
              Students
            </p>
      </a>

      {/* 3rd */}
      <a
        class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="/services/digital-campaigns"
      >
        <img width="64" height="64" className='mx-auto' src={course} alt="training"/>
            <h6 className="text-3xl font-bold lg:text-4xl text-gray-800 xl:text-5xl">
                <CountUp start={0} end={57} duration={200} delay={2}></CountUp>+
            </h6>
            <p className="text-sm text-gray-500 font-bold tracking-widest uppercase ">
              Courses
            </p>
      </a>

      {/* 4th */}
      <a
        class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="/services/digital-campaigns"
      >
        <img width="54" height="54" className='mx-auto' src={user} alt="training"/>
            <h6 className="text-3xl mt-2 font-bold lg:text-4xl text-gray-800 xl:text-5xl">
                <CountUp start={0} end={1000} duration={200} delay={2}></CountUp>+
            </h6>
            <p className="text-sm text-gray-500 font-bold tracking-widest uppercase ">
              Users
            </p>
      </a>
    </div>

  </div>
</section>

    );
};

export default WorksPlan;