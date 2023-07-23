import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation;
  const isActice = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActice);
    return () => {
      window.removeEventListener("scroll", isActice);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "John",
    isSeler: true,
  };

  return (
    <nav
      className={
        active || pathname == "/"
          ? "bg-white border-gray-200 dark:bg-gray-900 transition duration-300 fixed w-full z-20 top-0 left-0"
          : "bg-green-900 border-gray-200 dark:bg-gray-900 transition duration-300"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span
            className={
              active || pathname == "/"
                ? "self-center text-2xl font-bold whitespace-nowrap text-gray-900"
                : "self-center text-2xl font-bold whitespace-nowrap text-white"
            }
          >
            Fiverr
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500">
            .
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
            <li>
              <a
                href="#"
                className={
                  active || pathname == "/"
                    ? "text-gray-500 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                    : "text-white block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                }
                aria-current="page"
              >
                Fiverr Business
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  active || pathname == "/"
                    ? "text-gray-500 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                    : "text-white block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                }
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  active || pathname == "/"
                    ? "text-gray-500 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                    : "text-white block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                }
              >
                English
              </a>
            </li>
            {!currentUser?.isSeler && (
              <li>
                <a
                  href="#"
                  className={
                    active || pathname == "/"
                      ? "text-gray-500 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                      : "text-white block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                  }
                >
                  Become a Seller
                </a>
              </li>
            )}
            <li>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="text-white bg-transparent font-medium rounded-lg py-2 text-center md:mr-0 border-white"
                type="button"
              >
                Sign In
              </button>
              {/* Main modal */}
              <div
                id="authentication-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative w-full max-w-md max-h-full">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to our platform
                      </h3>
                      <form className="space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                defaultValue
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label
                              htmlFor="remember"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                          <a
                            href="#"
                            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Lost Password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Login to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered?{" "}
                          <a
                            href="#"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                          >
                            Create account
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div class="flex md:order-2">
              {!currentUser && (
                <button
                  type="button"
                  class="text-white bg-transparent hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 border-solid border-2 border-white"
                >
                  Join
                </button>
              )}
              {currentUser && (
                <div>
                  <button
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="user photo"
                    />
                  </button>
                  {/* Dropdown menu */}
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {currentUser.userName}
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      {currentUser?.isSeler && (
                        <>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Gigs
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Add New Gig
                            </a>
                          </li>
                        </>
                      )}

                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div>
        {(active || pathname == "/") && (
          <>
            <hr className="border-solid border-1 border-gray-300 " />
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between text-gray-400">
              <NavLink className="link menuLink" to="/">
                Graphics & Design
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Video & Animation
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Writing & Translation
              </NavLink>
              <NavLink className="link menuLink" to="/">
                AI Services
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Digital Marketing
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Music & Audio
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Programming & Tech
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Business
              </NavLink>
              <NavLink className="link menuLink" to="/">
                Lifestyle
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
