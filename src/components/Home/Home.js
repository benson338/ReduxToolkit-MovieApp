import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies, addShows } from '../../features/movies/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  // useDispatch returns the store's dispatch method to let you dispatch actions

  const movieText = 'Harry';
  const seriesText = 'Friends';

  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));
    // after fetching, we need to update the state in store
    dispatch(addMovies(response.data));
  };
  const fetchShows = async () => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
      .catch((err) => console.log(err));
    dispatch(addShows(response.data));
  };

  useEffect(() => {
    fetchMovies();
    fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
