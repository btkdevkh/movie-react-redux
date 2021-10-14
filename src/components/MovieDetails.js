import { Fragment, useState } from 'react';
import { Card, CardHeader, IconButton, CardActions, Typography, CardMedia } from '@mui/material';
import { DeleteOutline, ThumbUp, ThumbDown } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';

const MovieDetails = ({ movie }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  const dispatch = useDispatch();
  useSelector(state => state.movie)

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id))
  }

  const handleLike = () => {
    if(!isLike) {
      setIsLike(true)
      movie.likes += 1;

      if(isDisLike === true) movie.dislikes -= 1;
      setIsDisLike(false);
    } else {
      setIsLike(false)
      movie.likes -= 1
    }
  }

  const handleDislike = () => {
    if(!isDisLike) {
      setIsDisLike(true)
      movie.dislikes += 1;

      if(isLike === true) movie.likes -= 1;
      setIsLike(false);
    } else {
      setIsDisLike(false)
      movie.dislikes -= 1
    }
  }

  return (
    <Fragment>
      <Card elevation={1} sx={{ minWidth: 275 }}>
        <CardHeader
          action={
            <IconButton onClick={handleDelete}>
              <DeleteOutline />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.category}
        />
        <CardMedia
          component="img"
          height="350"
          image={movie.img}
          alt={movie.title}
        />
        <CardActions>
          <IconButton onClick={handleLike}>
            <ThumbUp className={`${isLike && 'like'}`} />
          </IconButton>
          <Typography variant="body2"><strong>{movie.likes}</strong></Typography>

          <IconButton onClick={handleDislike}>
            <ThumbDown className={`${isDisLike && 'disLike'}`} />
          </IconButton>
          <Typography variant="body2"><strong>{movie.dislikes}</strong></Typography>
        </CardActions>
        <div className="votes">
          <div className="ratio"></div>
          <div className="tooltip">{movie.likes} / {movie.dislikes}</div>
        </div>
      </Card>
    </Fragment>
  )
}

export default MovieDetails;
