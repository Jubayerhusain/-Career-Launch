import {NavLink } from "react-router-dom";

function Navber() {
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-gray-700"
          }
        >
          {" "}
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-gray-700"
          }
        >
          {" "}
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-gray-700"
          }
        >
          {" "}
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 w-11/12 mx-auto py-5 my-3 top-0 sticky z-20 bg-transparent backdrop-blur-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-lg"
          >
            {Link}
          </ul>
        </div>
        <a class="btn btn-ghost lg:text-3xl font-bold text-2xl">Career Launch</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-semibold text-lg">{Link}</ul>
      </div>
      <div class="navbar-end">
        <a class="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-md font-semibold">Star Applying</a>
      </div>
    </div>
  );
}

export default Navber;
