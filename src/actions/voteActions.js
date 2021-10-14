import { 
  MOVIE_VOTE_LIKE_REQUEST,
  MOVIE_VOTE_LIKE_SUCCESS,
  MOVIE_VOTE_LIKE_FAIL,
  MOVIE_VOTE_DISLIKE_REQUEST,
  MOVIE_VOTE_DISLIKE_SUCCESS,
  MOVIE_VOTE_DISLIKE_FAIL
} from '../constants/voteConstants';

export const voteLike = (data) => async (dispatch) => {  
  try {
    dispatch({ type: MOVIE_VOTE_LIKE_REQUEST })

    dispatch({ 
      type: MOVIE_VOTE_LIKE_SUCCESS,
      payload: { ...data }
    })
  } catch (error) {
    dispatch({
      type: MOVIE_VOTE_LIKE_FAIL,
      payload: error.message
    })
  }
}

export const voteDislike = (data) => async (dispatch) => {  
  try {
    dispatch({ type: MOVIE_VOTE_DISLIKE_REQUEST })

    dispatch({ 
      type: MOVIE_VOTE_DISLIKE_SUCCESS,
      payload: { ...data }
    })
  } catch (error) {
    dispatch({
      type: MOVIE_VOTE_DISLIKE_FAIL,
      payload: error.message
    })
  }
}
