import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import {
  addDetails,
  removeSelectedItem,
} from '../../features/movies/moviesSlice';
import './MovieDetail.scss';

const MovieDetail = () => {
  const data = useSelector((state) => state.movies.selectedItem);

  const dispatch = useDispatch();
  const { imdbID } = useParams();
  // useParams is used to capture the id of the selected item from the URL
  const fetchDetails = async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    dispatch(addDetails(response.data));
  };

  useEffect(() => {
    fetchDetails(imdbID);

    // clean up function for clearing the previously fetched results
    return () => {
      dispatch(removeSelectedItem());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
