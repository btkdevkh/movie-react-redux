import { Fragment, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MovieDetails from './MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/movieActions';

const MovieList = ({ min, max }) => {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movieList);
  const { loading, error, movies } = movieList;

  useEffect(() => {    
    dispatch(listMovies())
  }, [dispatch])

  return (
    <Fragment>
      {loading ? (
        <Typography variant="h2" align="center"><HourglassEmptyIcon fontSize="large" /></Typography>
      ) : error ? (
        <Typography variant="h3">{error}</Typography>
      ) : (
        <Grid container justifyContent="center" spacing={3}>
          {movies.map((movie, idx) => (
            idx >= min && idx < max ?
            <Grid item xs={12} md={6} lg={4} key={movie.id}>
              <Paper>
                <MovieDetails movie={movie} />
              </Paper>
            </Grid> : null
          ))}
        </Grid>
      )}
    </Fragment>
  )
}

export default MovieList;
