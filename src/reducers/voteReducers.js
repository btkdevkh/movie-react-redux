import { 
  MOVIE_VOTE_LIKE_REQUEST,
  MOVIE_VOTE_LIKE_SUCCESS,
  MOVIE_VOTE_LIKE_FAIL,
  MOVIE_VOTE_DISLIKE_REQUEST,
  MOVIE_VOTE_DISLIKE_SUCCESS,
  MOVIE_VOTE_DISLIKE_FAIL
} from '../constants/voteConstants';

export const voteReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_VOTE_LIKE_REQUEST:
      return { 
        ...state,
        loading: true, 
      }
    case MOVIE_VOTE_LIKE_SUCCESS:
      return { 
        ...state,
        loading: false, 
        movies: state.movies.map(movie => {
          if(movie.id === action.payload.id) {
            return {
              ...movie,
              likes: action.payload.likes
            }
          } else {
            return movie;
          }
        }) 
      }
    case MOVIE_VOTE_LIKE_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_VOTE_DISLIKE_REQUEST:
      return { 
        ...state,
        loading: true, 
      }
    case MOVIE_VOTE_DISLIKE_SUCCESS:
      return { 
        ...state,
        loading: false, 
        movies: state.movies.map(movie => {
          if(movie.id === action.payload.id) {
            return {
              ...movie,
              dislikes: action.payload.dislikes
            }
          } else {
            return movie;
          }
        }) 
      }
    case MOVIE_VOTE_DISLIKE_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    default:
      return state
  }
}
