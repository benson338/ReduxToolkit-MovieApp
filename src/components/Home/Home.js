import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movies/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  // useDispatch returns the store's dispatch method to let you dispatch actions

  const movieText = 'Harry';
  const seriesText = 'Friends';

  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

// const movieText = 'Harry';
// const fetchMovies = async () => {
//   const response = await movieApi
//     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
//     .catch((err) => console.log(err));
//   // console.log(response);
//   dispatch(addMovies(response.data));
// };
