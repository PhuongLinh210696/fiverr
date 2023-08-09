import React from "react";
import * as HinhAnh from '../../Assets/Image'
import './Feature.scss'
const Feature = () => {
  // console.log(HinhAnh.Images.man);
  return (
    <div className=" bg-green-900 f-container">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between f-max">
        <div className="flex flex-col w-3/4 my-28 gap-8">
          <h1 className="text-5xl text-white pr-28 font-semibold leading-tight">
            Find the perfect <span className="italic">freelance services</span>, for your business
          </h1>
          <form className="w-3/5">
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-1.5 w-full z-20 text-sm bg-green-50 border border-green-300 text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 pl-10 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search for any service..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <div>
            <span className="text-white font-medium">Popular: </span>
            <button
              type="button"
              class="text-white bg-transparent border-solid border-2 border-white hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            >
              Web Design
            </button>
            <button
              type="button"
              class="text-white bg-transparent border-solid border-2 border-white hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            >
              WordPress
            </button>
            <button
              type="button"
              class="text-white bg-transparent border-solid border-2 border-white hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            >
              Logo Design
            </button>
            <button
              type="button"
              class="text-white bg-transparent border-solid border-2 border-white hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            >
              AI Services
            </button>
          </div>
        </div>
        <div className="w-2/5">
          <img
            // classname="h-auto w-full rounded-lg"
            src={HinhAnh.Images.man}
            alt
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
