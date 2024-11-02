import { useLoaderData } from "react-router-dom";
import CategorieJob from "./../CategoreJob/CategorieJob";

function JobCategoryList() {
  const categoriesJob = useLoaderData();
  console.log(categoriesJob);
  return (
    <div>
      <div className="my-14">
        <h1 className="font-bold text-4xl text-center text-gray-700 mt-5 pt-3">
          Job Category List
        </h1>
        <p className="text-center text-gray-600 font-semibold py-2 mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex-row lg:flex justify-evenly flex-row">
          {categoriesJob.map((categorieJob) => (
            <CategorieJob
              key={categorieJob.id}
              categorieJob={categorieJob}
            ></CategorieJob>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCategoryList;
