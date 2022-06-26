import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movieText = 'Harry';
  const response = await movieApi.get(
    `?apiKey=${APIKey}&s=${movieText}&type=movie`
  );
  // console.log(response);
  return response.data;
});

const fetchShows = createAsyncThunk('movies/fetchShows', async () => {
  const seriesText = 'Friends';
  const response = await movieApi.get(
    `?apiKey=${APIKey}&s=${seriesText}&type=series`
  );
  // console.log(response);
  return response.data;
});

const fetchDetails = createAsyncThunk('movies/fetchDetails', async (id) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
  // console.log(response.data);
  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
  selectedItem: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // This object contains case reducer functions..
    /* addMovies: (state, { payload }) => {
      state.movies = payload;
      // Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
      // However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
    }, */
    removeSelectedItem: (state) => {
      state.selectedItem = {};
    },
  },
  // "map object API"
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      // payload is given by AsyncThunkPayloadCreator function (aka PaylooadCreator)
      console.log('Movies Fetched Successfully!');
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      console.log('Shows Fetched Successfully!');
      return { ...state, shows: payload };
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log('Details Fetched Successfully!');
      return { ...state, selectedItem: payload };
    },
  },
});
// console.log(moviesSlice);

// Action creators are generated for each case reducer function
export const {
  // addMovies,
  removeSelectedItem,
} = moviesSlice.actions;
export { fetchMovies, fetchShows, fetchDetails };

// export const getAllmovies = (state) => state.movies.movies;
// first movies is moviesSlice name

export default moviesSlice.reducer;

// createSlice return value
// {
//   name : string,
//   reducer : ReducerFunction,
//   actions : Record<string, ActionCreator>,
//   caseReducers: Record<string, CaseReducer>.
//   getInitialState: () => State
// }

// Each function defined in the reducers argument will have a corresponding action creator generated using createAction and included in the result's actions field using the same function name.
