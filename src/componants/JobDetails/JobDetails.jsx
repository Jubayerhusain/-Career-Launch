import { useLoaderData, useParams } from "react-router-dom";

function Jobdetails() {
  const { jobId } = useParams();
  const idint = parseInt(jobId);
  //   console.log(idint);

  const loadeData = useLoaderData();
  const jobDetail = loadeData.find((data) => data.id === idint);
  //   console.log(jobDetail);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = jobDetail;
  return (
    <div className="w-12/12 mx-auto lg:w-11/12 bg-blue-50 rounded-2xl p-14 my-16">
      <div className="flex justify-around">
        <div className="w-5/12 space-y-3">
          <div>
            <p className="font-bold">Job Description:</p>
            <p>{job_description}</p>
          </div>
          <div>
            <p className="font-bold">Job Responsibility:</p>
            <p>{job_responsibility}</p>
          </div>
          <p className="font-bold">Educational Requirements:</p>
          <p>{educational_requirements}</p>
          <p className="font-bold">Experiences:</p>
          <p>{experiences}</p>
        </div>
        {/* job details  */}
        <div className="w-80 bg-gradient-to-r from-cyan-50 to-blue-200 rounded-xl">
          <div className=" bg-transparent backdrop-blur-lg rounded-xl p-10 space-y-3">
            <div>
              <h1 className="font-bold text-gray-700 text-xl">Job Details</h1>
              <p className="font-semibold text-gray-600">Salary: {salary}</p>
              <p className="font-semibold text-gray-600">Job Title: {job_title}</p>
            </div>
            <div>
              <h1 className="font-bold text-gray-700 text-xl">Contact Information</h1>
              <p className="font-semibold text-gray-600">Phone: {contact_information.phone}</p>
              <p className="font-semibold text-gray-600">Email: {contact_information.email}</p>
              <p className="font-semibold text-gray-600">Address: {contact_information.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdetails;
