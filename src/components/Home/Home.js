import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  // useDispatch returns the store's dispatch method to let you dispatch actions

  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log(err));
      // console.log(response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
    // after fetching, we need to update the state in store
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
