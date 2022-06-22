import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movies from "../components/Movies";
import { fetchMovies, fetchSeries } from "../features/movie/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const seriesText = "Game";
  const movieText = "Marvel";

  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchSeries(seriesText));
  }, [dispatch]);

  return (
    <>
      <Movies />
    </>
  );
}
