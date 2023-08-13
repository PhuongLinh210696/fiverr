import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../SignIn/SignIn";
import { deleteLocal } from "../../Utils/localStore"
import * as HinhAnh from '../../Assets/Image'
import './Header.scss'
import { Modal } from "antd"
import { https } from "../../Services/config";
import { wService } from "../../Services/wService";

const Header = () => {

  const { userName } = useSelector((state) => state.user);
  // console.log(userName)
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

  const handleClick = (e) => {
    e.preventDefault();
    deleteLocal('user');
    window.location.reload();
  }

  //Modal Ant-design
  //SigIn
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Join
  const [isModalOpenJoin, setIsModalOpenJoin] = useState(false);
  const showModalJoin = () => {
    setIsModalOpenJoin(true);
  };
  const handleOkJoin = () => {
    setIsModalOpenJoin(false);
  };
  const handleCancelJoin = () => {
    setIsModalOpenJoin(false);
  };

  const [wData, setWData] = useState([]);
  useEffect(() => {
    async function fetchWData() {
      try {
        const response = await wService.getWMenu();
        const data = response.data.content;
        setWData(data);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchWData();
  }, []);
  return (
    <nav
      className={
        active || pathname == "/"
          ? "bg-white border-gray-200 dark:bg-gray-900 transition duration-300 fixed w-full z-20 top-0 left-0"
          : "bg-green-900 border-gray-200 dark:bg-gray-900 transition duration-300"
      }
    >
      <div className="h-warp">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-head">
          <a href="/" className="flex items-center h-logo">
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
          <div className="h-search">
            <div className="search-bar">
              <form>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto h-right" id="navbar-default">
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
                  <NavLink
                    href="#"
                    className={
                      active || pathname == "/"
                        ? "text-gray-500 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                        : "text-white block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                    }
                  >
                    Become a Seller
                  </NavLink>
                </li>
              )}
              <li>
                <button
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  className={
                    active || pathname == "/" ? "text-gray-500 bg-transparent font-medium rounded-lg py-2 text-center md:mr-0 border-white" : "text-white bg-transparent font-medium rounded-lg py-2 text-center md:mr-0 border-white"
                  }
                  onClick={showModal}
                >
                  Sign In
                </button>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <SignUp />
                </Modal>

              </li>
              <div class="flex md:order-2">
                {!userName && (
                  <>
                    <button
                      data-modal-target="authentication-modal-signin"
                      data-modal-toggle="authentication-modal-signin"
                      class="text-white bg-transparent hover:bg-green-700 focus:outline-none font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 border-solid border-2 border-white"
                      onClick={showModalJoin}
                    >
                      Join
                    </button>
                    <Modal open={isModalOpenJoin} onOk={handleOkJoin} onCancel={handleCancelJoin}>
                      <SignIn />
                    </Modal>
                  </>
                )}
                {userName && (
                  <div>
                    <button
                      type="button"
                      className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
                      id="user-menu-button"
                      aria-expanded="false"
                      data-dropdown-toggle="user-dropdown"
                      data-dropdown-placement="bottom"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src={HinhAnh.Images.empty}
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
                          {/* {currentUser.userName} */}
                          {userName.user.name}
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
                            onClick={handleClick}
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
      </div>

      <div className="h-nav">
        {(active || pathname == "/") && (
          <>
            <hr className="border-solid border-1 border-gray-300 " />
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between text-gray-400 h-menu">
              {wData.map((item) => (
                <NavLink 
                key={item.id}
                className="link menuLink"
                to={`/Categories/${item.id}`}
                >
                {item.tenLoaiCongViec}
              </NavLink>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
