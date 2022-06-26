import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { Settings } from '../../common/settings';
// import { getAllmovies } from '../../features/movies/moviesSlice';
// https://react-slick.neostack.com/docs/get-started

const MovieListing = () => {
  // const movies = useSelector(getAllmovies);
  // useSelector reads a value from the store state and subscribes to updates
  // const movies = useSelector((state) => state.movies.movies);
  const { movies, shows, moviesLoading, seriesLoading } = useSelector(
    (state) => state.movies
  );
  // console.log(movies);

  let renderMovies = '',
    renderShows = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {moviesLoading === true ? (
            <div style={{ color: 'white' }}>...Loading</div>
          ) : (
            <Slider {...Settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {seriesLoading === true ? (
            <div style={{ color: 'white' }}>...Loading</div>
          ) : (
            <Slider {...Settings}>{renderShows}</Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
