import { MdOutlineAccountTree } from "react-icons/md";
function CategorieJob({ categorieJob }) {
  console.log(categorieJob);
  const { id, logo, category_name, availability } = categorieJob;
  return (
    <div className="bg-blue-50 p-10 rounded-lg m-5 text-gray-700">
        <img className="py-3" src={logo} alt="" />
        <h1 className="text-lg font-semibold">{category_name}</h1>
        <p className="text-md font-semibold text-gray-600">{availability}</p>
    </div>
  );
}

export default CategorieJob;
