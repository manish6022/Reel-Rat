import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "./movieApi";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    const response = await movieApi.get(
      `?apiKeY=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`
    );

    return response.data;
  }
);

export const fetchSeries = createAsyncThunk(
  "movies/fetchSeries",
  async (search) => {
    const response = await movieApi.get(
      `?apiKeY=${process.env.REACT_APP_API_KEY}&s=${search}&type=series`
    );

    return response.data;
  }
);

export const fetchDeatails = createAsyncThunk(
  "movies/fetchDetails",
  async (imdbID) => {
    const response = await movieApi.get(
      `?apiKeY=${process.env.REACT_APP_API_KEY}&i=${imdbID}&plot=full`
    );

    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectedDetails: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedItem: (state) => {
      state.selectedDetails = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("Getting Data from server");
    },
    [fetchMovies.fulfilled]: (state, action) => {
      console.log("Fetched Data successfully");
      return { ...state, movies: action.payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("Fetch Rejected");
    },

    [fetchSeries.fulfilled]: (state, action) => {
      console.log("Fetched Data successfully");
      return { ...state, series: action.payload };
    },
    [fetchDeatails.fulfilled]: (state, action) => {
      console.log("Fetched Data successfully");
      return { ...state, selectedDetails: action.payload };
    },
  },
});
export const { removeSelectedItem } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedDetails = (state) => state.movies.selectedDetails;

export default movieSlice.reducer;
