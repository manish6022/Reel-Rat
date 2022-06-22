import React, { useEffect } from "react";
import { getAllMovies, getAllSeries } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const Movies = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  let renderMovies,
    renderSeries = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((item, index) => <MovieCard key={index} data={item} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  return (
    <div>
      <div className=" my-28">
        <h2 className="mb-10 font-semibold text-2xl text-center text-white">
          Movies
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]  px-10  md:px-28">
          {renderMovies}
        </div>
      </div>
      <div className=" my-20">
        <h2 className="mb-10 font-semibold text-2xl text-center text-white">
          Series
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]  px-10  md:px-28 ">
          {renderSeries}
        </div>
      </div>
    </div>
  );
};

export default Movies;
