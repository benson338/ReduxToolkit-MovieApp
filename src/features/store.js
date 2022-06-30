import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // auth: authReducer,
    // user: userReducer,
    // counter: counterReducer
  },
});

// configureStore() generates a state for each reducer in the 'reducer' object
// Then anywhere in the application, we can access that state by using useSelector hook
