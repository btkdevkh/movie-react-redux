import { Fragment, useState } from 'react';
import { Card, CardHeader, IconButton, CardActions, Typography, CardMedia } from '@mui/material';
import { DeleteOutline, ThumbUp, ThumbDown } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { voteLike, voteDislike } from '../actions/voteActions';

const MovieDetails = ({ movie }) => {
  const dispatch = useDispatch();

  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id))
  }

  const handleLike = () => {
    if(!isLike) {
      setIsLike(true)
      dispatch(voteLike({ likes: movie.likes++ }));

      if(isDisLike === true) {
        dispatch(voteDislike({ dislikes: movie.dislikes-- }))
      }

      setIsDisLike(false);
      
    } else {
      setIsLike(false)
      dispatch(voteLike({ likes: movie.likes-- }));
    }
  }

  const handleDislike = () => {
    if(!isDisLike) {
      setIsDisLike(true)
      dispatch(voteDislike({ dislikes: movie.dislikes++ }))

      if(isLike === true) {
        dispatch(voteLike({ likes: movie.likes-- }));
      }

      setIsLike(false);

    } else {
      setIsDisLike(false)
      dispatch(voteDislike({ dislikes: movie.dislikes-- }))
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
