import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
      // Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
      // However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
    },
  },
});
// console.log(moviesSlice);

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions;

export const getAllmovies = (state) => state.movies.movies;

export default moviesSlice.reducer;
