import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Job({ job }) {
  //   console.log(job);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="mx-auto space-y-1 p-5 w-80 border-2 rounded-xl">
      <img className="w-[120px] my-3" src={logo} alt="" />
      <div className="py-3">
        <h1 className="text-xl font-bold text-gray-600">{job_title}</h1>
        <p className="text-md font-semibold text-gray-600">{company_name}</p>
      </div>
      <div className="flex space-x-3 py-2">
        <p className="badge border-blue-300 badge-outline text-blue-400">
          {remote_or_onsite}
        </p>
        <p className="badge border-blue-300 badge-outline text-blue-400">
          {job_type}
        </p>
      </div>
      <div className="flex space-x-3 items-center">
        <p className="flex">
          <span className="mt-1 ml-1">
            <MdLocationCity />{" "}
          </span>
          <span>{location}</span>
        </p>
        <p className="flex">
          <span className="mt-1 ml-1">
            <RiMoneyDollarCircleLine />{" "}
          </span>
          <span>salary: {salary}</span>
        </p>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <a className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-md font-semibold">
          View Details
        </a>
      </Link>
    </div>
  );
}

export default Job;
