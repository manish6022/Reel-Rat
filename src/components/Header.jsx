import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchMovies, fetchSeries } from "../features/movie/movieSlice";

const Header = () => {
  let Links = [
    // { name: "BLOG'S", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const searchSubmitHandler = async (e) => {
    await history.push("/");
    dispatch(fetchMovies(search));
    dispatch(fetchSeries(search));
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className=" w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-slate-900 py-5 md:px-10 px-7 text-neutral-300 ">
        <Link to="/">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center  
      text-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-2 text-green-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            Reel-Rat
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden hover:text-neutral-100 duration-500"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>

        <ul
          className={`md:flex md:items-center py-4 md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 sm:pl-20 transition-all duration-500 ease-in-out ${
            open ? "top-[72px] " : "top-[-490px]"
          }`}
        >
          <div className="">
            <form className="flex " onSubmit={searchSubmitHandler}>
              <input
                type="text"
                placeholder="Search Shows"
                className=" h-10 rounded-l-3xl text-black outline-none px-5 "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="  h-10 bg-green-400 text-black px-5 rounded-r-3xl  font-semibold"
              >
                Search
              </button>
            </form>
          </div>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7 ">
              <Link
                to={link.link}
                className=" hover:text-neutral-50 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
