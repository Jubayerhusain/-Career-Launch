import { useEffect, useState } from "react";
import Job from "../Job/Job";
function FeaturedJobs() {
  const [allJobs, setAllJob] = useState([])
  useEffect(()=>{
    fetch(`./jobs.json`)
    .then(res => res.json())
    .then(data=>setAllJob(data))
},[])
// console.log(allJobs);
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 py-2">
        <h1 className="text-5xl font-bold text-center text-gray-700">
          Featured Jobs
        </h1>
        <p className="text-md font-semibold text-center text-gray-600 py-2 w-11/12 md:w-8/12 lg:w-7/12 mx-auto">
          Explore our handpicked selection of featured job opportunities
          tailored for you! These positions are highly sought after and offer
          competitive salaries, dynamic work environments, and great potential
          for career advancement.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 my-14">
        {
            allJobs.map(job=> <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
}

export default FeaturedJobs;
