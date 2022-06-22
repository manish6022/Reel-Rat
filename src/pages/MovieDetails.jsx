import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeatails,
  getSelectedDetails,
  removeSelectedItem,
} from "../features/movie/movieSlice";
import Loader from "../components/Loader";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getSelectedDetails);

  useEffect(() => {
    dispatch(fetchDeatails(imdbID));
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [dispatch, imdbID]);

  return (
    <>
      {Object.keys(details).length === 0 ? (
        <Loader />
      ) : (
        <section
          style={{
            backgroundImage: `linear-gradient( rgb(15, 23, 42,1),rgba(15, 24, 42, 0.7) ,rgba(15, 24, 42,1)), url(${details.Poster})`,
          }}
          className="bg-no-repeat bg-cover min-h-[70vh] my-20 "
        >
          {/* container */}
          <div className="flex flex-col md:flex-row justify-center items-center  md:items-start  min-h-[70vh] md:gap-20 px-5 backdrop-blur-sm">
            {/* card */}
            <div className=" flex flex-col gap-5 my-10">
              <img src={details.Poster} className="h-80 w-56" />
              <button className="bg-green-400 py-3 rounded-3xl text-black  font-semibold hover:bg-green-600">
                Stream Movie
              </button>

              <button className="bg-neutral-700 ring-1 ring-neutral-600 py-3 rounded-3xl text-white font-mediam hover:bg-neutral-600">
                Watch Trailer
              </button>
            </div>
            <div className="flex flex-col my-10">
              {/* title */}
              <div>
                <h2 className="text-4xl text-white font-semibold">
                  {details.Title}
                </h2>
                <div className="flex flex-col lg:flex-row my-3">
                  <h2 className="my-2 mr-10">
                    Country:-
                    <span className="text-neutral-300">{details.Country}</span>
                  </h2>
                  <h2 className="my-2">
                    <span className="text-neutral-100 bg-neutral-600 px-2 py-1 rounded-lg">
                      {details.Genre}
                      <span className="mx-5 text-green-400">
                        {details.Rated}
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
              {/* buttons */}

              <div className="flex w-full justify-center md:inline-block my-5">
                <button className=" bg-neutral-700 ring-1 ring-neutral-600 bg-opacity-60 hover:bg-opacity-95 m-1 text-white px-2 py-1 rounded-l-xl">
                  Want To See
                </button>
                <button className=" bg-neutral-700 ring-1 ring-neutral-600 bg-opacity-60 hover:bg-opacity-95 m-1 text-white px-2 py-1 ">
                  Want To See
                </button>
                <button className=" bg-neutral-700 ring-1 ring-neutral-600 bg-opacity-60 hover:bg-opacity-95 m-1 text-white px-2 py-1 rounded-r-xl">
                  Want To See
                </button>
              </div>
              {/* Actors */}
              <div>
                <h5>
                  Actors:- {""}
                  <span className="text-neutral-300">{details.Actors}</span>
                </h5>
              </div>
              <div className="flex md:flex-row flex-col">
                {details.Ratings &&
                  details.Ratings.map((rating, index) => (
                    <h4 key={index} className="mr-2 text-neutral-400 text-sm">
                      {rating.Source}
                      {" :-"}{" "}
                      <span className="text-neutral-200">{rating.Value}</span>
                    </h4>
                  ))}
              </div>
              <h2 className="my-2 mr-10">
                Awards:-
                <span className="text-neutral-300">{details.Awards}</span>
              </h2>
              <div className="flex">
                <h2 className="my-2 mr-10">
                  Director:-
                  <span className="text-neutral-300">{details.Director}</span>
                </h2>
                <h2 className="my-2 mr-10">
                  Release date:
                  <span className="text-neutral-300">{details.Released}</span>
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row">
                <h2 className="my-1 mr-10">
                  Box Office:-
                  <span className="text-neutral-300">{details.BoxOffice}</span>
                </h2>
                <h2 className="my-1 mr-10">
                  Language:
                  <span className="text-neutral-300">{details.Language}</span>
                </h2>
                <h2 className="my-1 mr-10">
                  DVD:
                  <span className="text-neutral-300">{details.DVD}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex font-medium  w-[80%] mx-auto my-3 ">
            <h2 className="text-neutral-200 text-lg text-left ">Plot:-</h2>
          </div>

          <div className="flex justify-center">
            <p className="w-[80%]">{details.Plot}</p>
          </div>
        </section>
      )}
    </>
  );
}
