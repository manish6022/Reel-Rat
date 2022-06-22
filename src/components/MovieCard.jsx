import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="cursor-pointer hover:text-neutral-100 hover:-translate-y-2 transition-all ease-in mx-auto text-center">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="">
          <div className="h-80 w-60 mx-auto ">
            <img
              src={data.Poster}
              alt={data.Title}
              className="h-full w-full rounded-xl  "
            />
          </div>
          <div className="px-1 py-3">
            <div className="font-medium mb-3">
              <h4>
                {data.Title} ({data.Year})
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
