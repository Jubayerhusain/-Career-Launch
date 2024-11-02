import React from "react";
import BanngerMan from "./../../assets/bannerMan.png";
function Banner() {
  return (
    <div className="hero bg-blue-50 pt-6">
      <div className="flex-row md:flex justify-around items-center lg:flex-row-reverse">
        <img src={BanngerMan} className="h-full" />
        <div className="ml-10">
          <h1 className="text-5xl font-bold">
            One Step Closer To Your <p className="text-blue-500">Dream Job</p>
          </h1>
          <p className="py-6 lg:w-8/12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-md font-semibold">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
