import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  shows: {},
  selectedItem: {},
  // to store details of selected movie/show
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // 'reducers' object contains case reducer functions
    addMovies: (state, { payload }) => {
      // payload is destructred from action object
      state.movies = payload;
      // Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
      // However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
    },
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
    addDetails: (state, { payload }) => {
      state.selectedItem = payload;
    },
    removeSelectedItem: (state) => {
      state.selectedItem = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, addShows, addDetails, removeSelectedItem } =
  moviesSlice.actions;

export default moviesSlice.reducer;
